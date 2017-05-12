var Users = require('./data/users');
var Tags = require('./data/tags');
var Tasks = require('./data/tasks');
var TaskAssignmentModel = require('./data/taskModel');

// models
var WorkflowTaskModel = require('./models/workflowTasks');
var UserModel = require('./models/users');
var PreferenceModel = require('./models/preferences');

module.exports = function (app) {

	// api ---------------------------------------------------------------------
	// GET
	app.get('/api/users', function (req, res) {
		let users = getPickerData(Users.items.slice(), req.query.query, req.query.page, Users.pagination);

		res.json({
			items: users,
			totalCount: Users.totalCount,
			pagination: Users.pagination
		});
	});

	app.get('/api/tags', function (req, res) {
		let tags = getPickerData(Tags.items.slice(), req.query.query, req.query.page, Tags.pagination);

		res.json({
			items: tags,
			totalCount: Tags.totalCount,
			pagination: Tags.pagination
		});
	});

	app.get('/api/tasks', function (req, res) {
		let tasks = getPickerData(Tasks.items.slice(), req.query.query, req.query.page, Tasks.pagination);

		res.json({
			items: tasks,
			totalCount: Tasks.totalCount,
			pagination: Tasks.pagination
		});
	});

	// get task model for assignment component - test data to assignment component
	app.get('/api/task/:taskId/assignment', function (req, res) {
		res.json({ model: TaskAssignmentModel });
	});

	// get task assignee
	app.post('/api/assignment/createtasks/:taskType', function (req, res) {
		/*
		{ 
			workflowIds: [ '100', '101', '102', '103' ],
			assigneeOptions:
			{ 
				AssignmentOption: '1',
				userPicker: '3,4,6,7',
				preferences: '1;3;4',
				companyTagPicker: '6,7',
				userTagPicker: '' 
			} 
		}
		*/

		console.log(req.body);

		let taskUsers = getTaskUsers(req.body);

		res.json({ items: taskUsers });
	});

	// POST
	// save assignment
	app.post('/api/assignment', function (req, res) {
		console.log(req.body);
		res.json({ status: "OK", body: req.body });
	});

	// application -------------------------------------------------------------
	app.get('*', function (req, res) {
		res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};

function getPickerData(entity, query, page, pagination) {
	// sort array alphabetically
	entity.sort(compare);

	// apply query
	if (!!query) {
		const queryLower = query.toLowerCase().trim();

		entity = entity.filter(function (value) {
			return value.text.toLowerCase().indexOf(queryLower) !== -1;
		});
	}

	let pageNumber = Number(page);

	// for negative or missing page, get first page
	if (isNaN(pageNumber) || pageNumber < 1) {
		pageNumber = 1;
	}

	// get next page
	let endItem = pageNumber * pagination;
	entity = entity.slice((endItem - pagination), endItem);

	return entity;
}

function compare(a, b) {
	const aTextLower = a.text.toLowerCase();
	const bTextLower = b.text.toLowerCase();

	if (aTextLower < bTextLower) {
		return -1;
	}

	if (aTextLower > bTextLower) {
		return 1;
	}

	return 0;
}

/**
 * Business logic 
 */

// Specific = 0, Auto = 1, ByTask = 2
function getTaskUsers(model) {
	let taskUsersVM = [];
	const assigneeOptionNumber = Number(model.assigneeOptions.AssignmentOption);

	model.workflowIds.forEach((id) => {
		let wf = WorkflowTaskModel.find(w => w.workflowId == id);
		let users = [];
		let fromTask = null;

		switch (assigneeOptionNumber) {
			case 0:
				users = SpecificUsers(model.assigneeOptions.userPicker);
				break;
			case 1:
				users = AutoUsers(model.assigneeOptions, wf.language);
				break;
			case 2:
				fromTask = FromTaskUsers(model.assigneeOptions.taskPicker);
				break;
			default:
				break;
		}

		taskUsersVM.push({
			"workflow": wf,
			"users": users,
			"fromTask": fromTask
		});
	});

	return taskUsersVM;
}

function SpecificUsers(userIds) {
	let ids = userIds.split(',').map(m => Number(m));
	let validUsers = UserModel.filter((user) => {
		return ids.indexOf(user.id) != -1;
	});

	let users = [];
	validUsers.forEach((vu) => {
		users.push(vu);
	});

	return users;
}

function AutoUsers(model, language) {
	if (!!model.preferences && model.preferences.length) {
		const preferences = model.preferences.split(';').map(p => Number(p));
		if (!preferences.length) {
			return [];
		}

		let companies = PreferenceModel.filter(val => val.language == language && preferences.indexOf(val.preference) != -1).map(p => p.companyName);
		if (!companies.length) {
			return [];
		}

		let users = UserModel.filter(u => companies.indexOf(u.companyName) != -1);
		if (!users.length) {
			return [];
		}

		if (model.companyTagPicker.length) {
			let companyTags = model.companyTagPicker.split(',').map(t => Number(t));
			if (companyTags.length) {
				users = users.filter(u => SomeElementExists(companyTags, u.companyTags));
			}
		}

		if (model.userTagPicker.length) {
			let userTags = model.userTagPicker.split(',').map(t => Number(t));
			if (userTags.length) {
				users = users.filter(u => SomeElementExists(userTags, u.userTags));
			}
		}

		return users;
	}

	return [];
}

function FromTaskUsers(taskName) {
	return [];
}

function SomeElementExists(arr, elementArr) {
	for (let el in elementArr) {
		if (arr.indexOf(elementArr[el]) != -1) {
			return true;
		}
	}
	return false;
}
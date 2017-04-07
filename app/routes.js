var Users = require('./data/users');
var Tags = require('./data/tags');
var Tasks = require('./data/tasks');
var TaskUsers = require('./data/taskUsers');
var TaskAssignmentModel = require('./data/taskModel');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// GET
	app.get('/api/users', function(req, res) {
		let users = getPickerData(Users.items.slice(), req.query.query, req.query.page, Users.pagination);

		res.json({
			items: users,
			totalCount: Users.totalCount,
    		pagination: Users.pagination
		});
	});

	app.get('/api/tags', function(req, res) {
		let tags = getPickerData(Tags.items.slice(), req.query.query, req.query.page, Tags.pagination);

		res.json({
			items: tags,
			totalCount: Tags.totalCount,
    		pagination: Tags.pagination
		});
	});

	app.get('/api/tasks', function(req, res) {
		let tasks = getPickerData(Tasks.items.slice(), req.query.query, req.query.page, Tasks.pagination);

		res.json({
			items: tasks,
			totalCount: Tasks.totalCount,
    		pagination: Tasks.pagination
		});
	});

	// get task model for assignment component
	app.get('/api/task/:taskId/assignment', function(req, res) {
		res.json({ model: TaskAssignmentModel });
	});

	// get task assignee
	app.post('/api/assignment/createtasks/:taskType', function(req, res) {
		console.log(req.body);
		res.json({ items: TaskUsers });
	});

	// POST
	// save assignment
	app.post('/api/assignment', function(req, res) {
		console.log(req.body);
		res.json({status: "OK", body: req.body});
	});

	// DELETE
	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		res.json({status: "OK"});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};

function getPickerData(entity, query, page, pagination) {
	// sort array alphabetically
	entity.sort(compare);

	// apply query
	if (!!query) {
		const queryLower = query.toLowerCase().trim();

		entity = entity.filter(function(value) {
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
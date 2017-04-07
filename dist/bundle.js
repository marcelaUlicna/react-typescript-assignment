/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	// assignee component
	var common_1 = __webpack_require__(3);
	var panel_1 = __webpack_require__(4);
	var task = {
	    element: $("#example"),
	    taskId: 10023,
	    taskIds: [],
	    workflowIds: [100, 101, 102, 103],
	    taskType: "Translation",
	    title: "Assignees",
	    taskTitle: "Assignee for each task",
	    hasPreviousTask: true,
	    taskAssignmentUrl: "/api/assignment/createtasks/Translation",
	    assigneeOptions: {
	        option: common_1.AssigneeOption.Specific,
	        userIds: [3, 4, 6, 7],
	        userModel: [
	            { "id": 3, "text": "Bryant E. Aiello" },
	            { "id": 4, "text": "Linda Alston" },
	            { "id": 6, "text": "Stephen Quincy" },
	            { "id": 7, "text": "Floyd Lloyd" }
	        ],
	        preferences: "1",
	        companyTagIds: [],
	        companyTagModel: [],
	        userTagIds: [],
	        userTagModel: [],
	        taskName: ""
	    }
	};
	ReactDOM.render(React.createElement(panel_1.Panel, { model: task }), document.getElementById("example"));
	// Select2 components
	var select2_1 = __webpack_require__(8);
	var selectData = [
	    { "id": 3, "text": "Bryant E. Aiello" },
	    { "id": 4, "text": "Linda Alston" },
	    { "id": 6, "text": "Stephen Quincy" },
	    { "id": 7, "text": "Floyd Lloyd" }
	];
	ReactDOM.render(React.createElement(select2_1.Select2Ajax, { id: "userPicker1", name: "userPicker1", url: "/api/users", multiple: true, placeholder: "Select users", required: true, data: selectData }), document.getElementById("selectMultiple"));
	ReactDOM.render(React.createElement(select2_1.Select2Ajax, { id: "userPicker2", name: "userPicker2", url: "/api/users", placeholder: "Select users", required: true, data: [] }), document.getElementById("selectSingle"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AssigneeOption;
	(function (AssigneeOption) {
	    AssigneeOption[AssigneeOption["Specific"] = 0] = "Specific";
	    AssigneeOption[AssigneeOption["Auto"] = 1] = "Auto";
	    AssigneeOption[AssigneeOption["ByTask"] = 2] = "ByTask";
	})(AssigneeOption = exports.AssigneeOption || (exports.AssigneeOption = {}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var switchPanel_1 = __webpack_require__(5);
	var taskTable_1 = __webpack_require__(11);
	var Panel = (function (_super) {
	    __extends(Panel, _super);
	    function Panel(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = { taskPanel: _this.props.taskAssigneePanel || false };
	        _this.togglePanel = _this.togglePanel.bind(_this);
	        return _this;
	    }
	    Panel.prototype.togglePanel = function () {
	        this.setState(function (prev, props) { return prev.taskPanel = !prev.taskPanel; });
	    };
	    Panel.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement(AssignentComponent, { model: this.props.model, taskAssigneePanel: this.state.taskPanel, toggleTaskPanel: this.togglePanel }),
	            React.createElement(TaskAssignmentComponent, { model: this.props.model, taskAssigneePanel: this.state.taskPanel, toggleTaskPanel: this.togglePanel })));
	    };
	    return Panel;
	}(React.Component));
	exports.Panel = Panel;
	var AssignentComponent = (function (_super) {
	    __extends(AssignentComponent, _super);
	    function AssignentComponent() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(AssignentComponent.prototype, "style", {
	        get: function () {
	            return this.props.taskAssigneePanel ? { "display": "none" } : { "display": "block" };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AssignentComponent.prototype.render = function () {
	        return (React.createElement("div", { className: "assignee-component", style: this.style },
	            React.createElement("h4", null,
	                React.createElement("strong", null, this.props.model.title)),
	            React.createElement("div", { className: "row" },
	                React.createElement("div", { className: "col-md-9" },
	                    React.createElement(switchPanel_1.SwitchPanel, { option: this.props.model.assigneeOptions })),
	                React.createElement("div", { className: "col-md-3" },
	                    React.createElement("button", { type: "button", className: "btn btn-primary show-assignee-button", onClick: this.props.toggleTaskPanel }, "Show task assignees")))));
	    };
	    return AssignentComponent;
	}(React.Component));
	var TaskAssignmentComponent = (function (_super) {
	    __extends(TaskAssignmentComponent, _super);
	    function TaskAssignmentComponent() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    TaskAssignmentComponent.prototype.render = function () {
	        if (this.props.taskAssigneePanel) {
	            return (React.createElement("div", { className: "task-assignee-component" },
	                React.createElement("h4", null,
	                    React.createElement("strong", null, this.props.model.taskTitle)),
	                React.createElement("div", null,
	                    React.createElement("button", { type: "button", className: "btn btn-default btn-sm cancel-button pull-right", onClick: this.props.toggleTaskPanel }, "Cancel")),
	                React.createElement("div", { className: "row" },
	                    React.createElement("div", { className: "col-md-12" },
	                        React.createElement(taskTable_1.TaskAssignmentTable, { model: this.props.model })))));
	        }
	        else {
	            return React.createElement("div", null);
	        }
	    };
	    return TaskAssignmentComponent;
	}(React.Component));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var common_1 = __webpack_require__(3);
	var assigneePanel_1 = __webpack_require__(6);
	var SwitchPanel = (function (_super) {
	    __extends(SwitchPanel, _super);
	    function SwitchPanel(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            radioValue: _this.props.option.option
	        };
	        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
	        return _this;
	    }
	    SwitchPanel.prototype.handleOptionChange = function (event) {
	        var value = event.target.value;
	        this.setState({ radioValue: Number(common_1.AssigneeOption[value]) });
	    };
	    SwitchPanel.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement("div", { className: "radio" },
	                React.createElement("label", { className: "radio-switch" },
	                    React.createElement("input", { type: "radio", value: "Specific", name: "AssignmentOption", checked: this.state.radioValue == common_1.AssigneeOption.Specific, onChange: this.handleOptionChange }),
	                    "by name"),
	                React.createElement("label", { className: "radio-switch" },
	                    React.createElement("input", { type: "radio", value: "Auto", name: "AssignmentOption", checked: this.state.radioValue == common_1.AssigneeOption.Auto, onChange: this.handleOptionChange }),
	                    "by preference"),
	                React.createElement("label", { className: "radio-switch" },
	                    React.createElement("input", { type: "radio", value: "ByTask", name: "AssignmentOption", checked: this.state.radioValue == common_1.AssigneeOption.ByTask, onChange: this.handleOptionChange }),
	                    "by other task")),
	            React.createElement(assigneePanel_1.AssigneePanel, { option: this.state.radioValue, component: this.props.option })));
	    };
	    return SwitchPanel;
	}(React.Component));
	exports.SwitchPanel = SwitchPanel;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../src/typings.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var common_1 = __webpack_require__(3);
	var specific_1 = __webpack_require__(7);
	var auto_1 = __webpack_require__(9);
	var task_1 = __webpack_require__(10);
	var AssigneePanel = (function (_super) {
	    __extends(AssigneePanel, _super);
	    function AssigneePanel(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = _this.props.component;
	        return _this;
	    }
	    AssigneePanel.prototype.render = function () {
	        switch (this.props.option) {
	            case common_1.AssigneeOption.Specific:
	                return React.createElement(specific_1.SpecificSection, { users: this.state.userModel });
	            case common_1.AssigneeOption.Auto:
	                return React.createElement(auto_1.AutoSection, null);
	            case common_1.AssigneeOption.ByTask:
	                return React.createElement(task_1.ByTaskSection, null);
	            default:
	                React.createElement("div", null, "Unknown option");
	        }
	    };
	    return AssigneePanel;
	}(React.Component));
	exports.AssigneePanel = AssigneePanel;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var select2_1 = __webpack_require__(8);
	var SpecificSection = (function (_super) {
	    __extends(SpecificSection, _super);
	    function SpecificSection(props) {
	        return _super.call(this, props) || this;
	    }
	    SpecificSection.prototype.render = function () {
	        return (React.createElement("div", { className: "" },
	            React.createElement("div", { className: "row" },
	                React.createElement("div", { className: "col-sm-12" },
	                    React.createElement(select2_1.Select2Ajax, { id: "userPicker", name: "userPicker", url: "/api/users", multiple: true, placeholder: "Select users", required: true, data: this.props.users })))));
	    };
	    return SpecificSection;
	}(React.Component));
	exports.SpecificSection = SpecificSection;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../src/typings.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var Select2Ajax = (function (_super) {
	    __extends(Select2Ajax, _super);
	    function Select2Ajax(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            selectedValues: _this.props.data || []
	        };
	        _this.handlePickerChange = _this.handlePickerChange.bind(_this);
	        return _this;
	    }
	    Object.defineProperty(Select2Ajax.prototype, "ids", {
	        get: function () {
	            return this.state.selectedValues.map(function (d) { return d.id; }).join();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Select2Ajax.prototype.componentDidMount = function () {
	        var _this = this;
	        var element = $("#" + this.props.id);
	        element.select2({
	            placeholder: this.props.placeholder,
	            multiple: this.props.multiple === true,
	            allowClear: this.props.allowClear === true,
	            minimumInputLength: this.props.minimumInputLength || 0,
	            ajax: {
	                url: this.props.url,
	                dataType: 'json',
	                quietMillis: 100,
	                data: function (term, page) {
	                    return {
	                        query: term,
	                        page: page // page number
	                    };
	                },
	                results: function (data, page) {
	                    var more = (page * data.pagination) < data.totalCount;
	                    return { results: data.items, more: more };
	                }
	            },
	            escapeMarkup: function (m) { return m; },
	            initSelection: function (element, callback) {
	                callback(_this.state.selectedValues);
	            }
	        });
	        element.on('change', function (e) { return _this.handlePickerChange(e); });
	    };
	    Select2Ajax.prototype.handlePickerChange = function (event) {
	        var added = event.added;
	        var removed = event.removed;
	        if (!this.props.multiple) {
	            this.setState({ selectedValues: [added] });
	        }
	        else {
	            if (!!added) {
	                this.setState(function (prev, props) {
	                    prev.selectedValues.push(added);
	                    return prev;
	                });
	            }
	            else if (!!removed) {
	                this.setState(function (prev, props) {
	                    var actualVal = prev.selectedValues.filter(function (val) { return val.id != removed.id; });
	                    prev.selectedValues = actualVal;
	                    return prev;
	                });
	            }
	            else {
	                console.log("no value changed");
	            }
	        }
	    };
	    Select2Ajax.prototype.render = function () {
	        return React.createElement("input", { className: "full-width", name: this.props.name, type: "text", id: this.props.id, value: this.ids, onChange: this.handlePickerChange });
	    };
	    return Select2Ajax;
	}(React.Component));
	exports.Select2Ajax = Select2Ajax;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var select2_1 = __webpack_require__(8);
	var AutoSection = (function (_super) {
	    __extends(AutoSection, _super);
	    function AutoSection(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            preferences: "1",
	            companyTags: [],
	            userTags: []
	        };
	        _this.handlePreferenceChange = _this.handlePreferenceChange.bind(_this);
	        return _this;
	    }
	    AutoSection.prototype.handlePreferenceChange = function (event) {
	        this.setState({ preferences: event.target.value });
	    };
	    AutoSection.prototype.render = function () {
	        return (React.createElement("div", { className: "row" },
	            React.createElement("div", { className: "col-sm-4" },
	                React.createElement("label", null, "Supplier preferences"),
	                React.createElement("input", { className: "form-control", value: this.state.preferences, onChange: this.handlePreferenceChange }),
	                React.createElement("small", { className: "text-muted" }, "separate preferences by semicolon")),
	            React.createElement("div", { className: "col-sm-4" },
	                React.createElement("label", null, "Supplier company tag"),
	                React.createElement(select2_1.Select2Ajax, { id: "companyTagPicker", name: "companyTagPicker", url: "/api/tags", multiple: true, placeholder: "Choose tags", data: [] })),
	            React.createElement("div", { className: "col-sm-4" },
	                React.createElement("label", null, "User tag"),
	                React.createElement(select2_1.Select2Ajax, { id: "userTagPicker", name: "userTagPicker", url: "/api/tags", multiple: true, placeholder: "Choose tags", data: [] }))));
	    };
	    return AutoSection;
	}(React.Component));
	exports.AutoSection = AutoSection;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var select2_1 = __webpack_require__(8);
	var ByTaskSection = (function (_super) {
	    __extends(ByTaskSection, _super);
	    function ByTaskSection() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ByTaskSection.prototype.render = function () {
	        return (React.createElement("div", { className: "form-group" },
	            React.createElement("div", { className: "row" },
	                React.createElement("div", { className: "col-sm-12" },
	                    React.createElement(select2_1.Select2Ajax, { id: "taskPicker", name: "taskPicker", url: "/api/tasks", multiple: false, placeholder: "Select task" }),
	                    React.createElement("small", { className: "text-muted" }, "Set the same assignee as on the selected task from current workflow.")))));
	    };
	    return ByTaskSection;
	}(React.Component));
	exports.ByTaskSection = ByTaskSection;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../src/typings.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var TaskAssignmentTable = (function (_super) {
	    __extends(TaskAssignmentTable, _super);
	    function TaskAssignmentTable(props) {
	        var _this = _super.call(this, props) || this;
	        _this.error = "Get assignee failed.";
	        _this.state = { users: [], error: "", finished: false };
	        return _this;
	    }
	    TaskAssignmentTable.prototype.componentWillMount = function () {
	        var _this = this;
	        var form = this.props.model.element.closest('form');
	        var formData = form.serialize();
	        $.ajax({
	            url: this.props.model.taskAssignmentUrl,
	            data: formData,
	            type: 'POST'
	        }).then(function (data, textStatus, xhr) {
	            _this.setState(function (prev, props) {
	                prev.finished = true;
	                if (xhr.statusText == "OK") {
	                    prev.users = data.items;
	                }
	                else {
	                    prev.error = "Get assignee failed. Error: " + xhr.statusText;
	                }
	                return prev;
	            });
	        });
	    };
	    TaskAssignmentTable.prototype.render = function () {
	        if (!this.state.finished) {
	            return React.createElement("div", null, "Loading...");
	        }
	        if (!!this.state.error) {
	            return React.createElement("div", null, this.state.error);
	        }
	        return (React.createElement("div", null, this.state.users.map(function (item, index) {
	            return React.createElement(Table, { data: item, level: index, key: "level_" + index });
	        })));
	    };
	    return TaskAssignmentTable;
	}(React.Component));
	exports.TaskAssignmentTable = TaskAssignmentTable;
	var Table = (function (_super) {
	    __extends(Table, _super);
	    function Table() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(Table.prototype, "namePrefix", {
	        get: function () {
	            return "Tasks[" + this.props.level + "]";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Table.prototype.render = function () {
	        console.log("Table", this.props);
	        var key = "user_table_" + this.props.level;
	        var taskName = "Tasks[" + this.props.level + "].TaskName";
	        var taskId = "Tasks[" + this.props.level + "].taskId";
	        var targetLanguage = "Tasks[" + this.props.level + "].TargetLanguage";
	        var targetLanguageId = "Tasks[" + this.props.level + "].TargetLanguageId";
	        var workflowId = "Tasks[" + this.props.level + "].WorkflowId";
	        return (React.createElement("div", { className: "task-language-level-" + this.props.level, "data-task-position": this.props.level },
	            React.createElement("input", { type: "hidden", name: taskName, value: this.props.data.taskName }),
	            React.createElement("input", { type: "hidden", name: taskId, value: this.props.data.taskId }),
	            React.createElement("input", { type: "hidden", name: targetLanguage, value: this.props.data.targetLanguage }),
	            React.createElement("input", { type: "hidden", name: targetLanguageId, value: this.props.data.targetLanguageId }),
	            React.createElement("input", { type: "hidden", name: workflowId, value: this.props.data.workflowId }),
	            React.createElement("div", { className: "panel panel-default" },
	                React.createElement("div", { className: "panel-heading assignment-task-breadcrumb" },
	                    React.createElement("div", { className: "task-navigation" },
	                        React.createElement("ul", { className: "breadcrumb" },
	                            React.createElement("li", null, this.props.data.workflowName),
	                            React.createElement("li", null, this.props.data.targetLanguage),
	                            React.createElement("li", null, this.props.data.taskName))),
	                    React.createElement("div", { className: "pull-right" },
	                        React.createElement("a", { href: "javascript:void(0)", className: "task-language-edit" }, "Edit"))),
	                React.createElement("div", { className: "panel-body" },
	                    React.createElement("div", { className: "task-language-table" },
	                        React.createElement(UserItemTable, { users: this.props.data.users, level: this.props.level }))))));
	    };
	    return Table;
	}(React.Component));
	var UserItemTable = (function (_super) {
	    __extends(UserItemTable, _super);
	    function UserItemTable() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(UserItemTable.prototype, "style", {
	        get: function () {
	            return {
	                "paddingLeft": "15px"
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    UserItemTable.prototype.selectedChanged = function () {
	    };
	    UserItemTable.prototype.render = function () {
	        var _this = this;
	        console.log(this.props);
	        if (!this.props.users.length) {
	            return React.createElement("div", { className: "text-dangerous" },
	                React.createElement("em", null, "No suppliers are found for this task."));
	        }
	        return (React.createElement("table", { className: "table" },
	            React.createElement("tbody", null, this.props.users.map(function (value, index) {
	                var assigneeId = "Tasks[" + _this.props.level + "].Assignees[" + index + "].Id";
	                var assigneeSelected = "Tasks[" + _this.props.level + "].Assignees[" + index + "].Selected";
	                return (React.createElement("tr", null,
	                    React.createElement("td", { width: "25", style: _this.style },
	                        React.createElement("input", { type: "hidden", name: assigneeId, value: value.userId }),
	                        React.createElement("input", { type: "checkbox", checked: value.selected, name: assigneeSelected, onChange: _this.selectedChanged })),
	                    React.createElement("td", null, value.name),
	                    React.createElement("td", null, value.company)));
	            }))));
	    };
	    return UserItemTable;
	}(React.Component));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
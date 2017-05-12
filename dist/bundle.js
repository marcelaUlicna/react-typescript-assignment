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
	var panel_1 = __webpack_require__(3);
	$.ajax('/api/task/100/assignment').then(function (data) {
	    var task = data.model;
	    task.element = $("#example");
	    renderPicker(task);
	});
	function renderPicker(task) {
	    ReactDOM.render(React.createElement(panel_1.Panel, { model: task, showAssigneeButton: true }), document.getElementById("example"));
	}


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
	var switchPanel_1 = __webpack_require__(4);
	var taskAssigneeWrapper_1 = __webpack_require__(12);
	var Panel = (function (_super) {
	    __extends(Panel, _super);
	    function Panel(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            taskPanel: _this.props.taskAssigneePanel || false,
	            assigneeOptions: _this.props.model.assigneeOptions
	        };
	        _this.togglePanel = _this.togglePanel.bind(_this);
	        return _this;
	    }
	    Panel.prototype.togglePanel = function () {
	        this.setState(function (prev, props) { return prev.taskPanel = !prev.taskPanel; });
	    };
	    Panel.prototype.render = function () {
	        var innerPanel = null;
	        if (this.props.showAssigneeButton) {
	            innerPanel = (React.createElement("div", null,
	                React.createElement(SwitchPanelWrapper, { model: this.props.model, taskAssigneePanel: this.state.taskPanel, toggleTaskPanel: this.togglePanel }),
	                React.createElement(TaskAssignmentWrapper, { model: this.props.model, taskAssigneePanel: this.state.taskPanel, toggleTaskPanel: this.togglePanel })));
	        }
	        else {
	            innerPanel = (React.createElement("div", { className: "row" },
	                React.createElement("div", { className: "col-md-12" },
	                    React.createElement(switchPanel_1.SwitchPanel, { option: this.props.model.assigneeOptions }))));
	        }
	        return (React.createElement("div", { className: "assignee-component" },
	            React.createElement("h4", null,
	                React.createElement("strong", null, this.props.model.title)),
	            innerPanel));
	    };
	    return Panel;
	}(React.Component));
	exports.Panel = Panel;
	var SwitchPanelWrapper = (function (_super) {
	    __extends(SwitchPanelWrapper, _super);
	    function SwitchPanelWrapper(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            taskPanel: _this.props.taskAssigneePanel || false,
	            assigneeOptions: _this.props.model.assigneeOptions,
	            disable: false
	        };
	        _this.handleDisableButton = _this.handleDisableButton.bind(_this);
	        return _this;
	    }
	    Object.defineProperty(SwitchPanelWrapper.prototype, "sectionStyle", {
	        get: function () {
	            return this.props.taskAssigneePanel ? { "display": "none" } : { "display": "block" };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SwitchPanelWrapper.prototype.handleDisableButton = function (disable) {
	        this.setState({ disable: disable });
	    };
	    SwitchPanelWrapper.prototype.render = function () {
	        return (React.createElement("div", { className: "row", style: this.sectionStyle },
	            React.createElement("div", { className: "col-md-9" },
	                React.createElement(switchPanel_1.SwitchPanel, { option: this.state.assigneeOptions, disableButton: this.handleDisableButton })),
	            React.createElement("div", { className: "col-md-3" },
	                React.createElement("input", { type: "button", className: "btn btn-primary show-assignee-button", value: "Show task assignees", onClick: this.props.toggleTaskPanel, disabled: this.state.disable }))));
	    };
	    return SwitchPanelWrapper;
	}(React.Component));
	var TaskAssignmentWrapper = (function (_super) {
	    __extends(TaskAssignmentWrapper, _super);
	    function TaskAssignmentWrapper() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    TaskAssignmentWrapper.prototype.render = function () {
	        if (this.props.taskAssigneePanel) {
	            return (React.createElement("div", null,
	                React.createElement("div", { className: "pull-right" },
	                    React.createElement("button", { type: "button", className: "btn btn-default btn-sm cancel-button", onClick: this.props.toggleTaskPanel }, "Cancel")),
	                React.createElement(taskAssigneeWrapper_1.TaskAssigneeWrapper, { model: this.props.model })));
	        }
	        else {
	            return React.createElement("div", null);
	        }
	    };
	    return TaskAssignmentWrapper;
	}(React.Component));


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
	var common_1 = __webpack_require__(5);
	var assigneePanel_1 = __webpack_require__(6);
	var storage_1 = __webpack_require__(9);
	var SwitchPanel = (function (_super) {
	    __extends(SwitchPanel, _super);
	    function SwitchPanel(props) {
	        var _this = _super.call(this, props) || this;
	        _this.name = "AssignmentOption";
	        _this.state = {
	            radioValue: _this.props.option.option
	        };
	        storage_1.ComponentStorage.SetValue(_this.name, _this.state.radioValue);
	        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
	        return _this;
	    }
	    SwitchPanel.prototype.handleOptionChange = function (event) {
	        var value = event.target.value;
	        this.setState({ radioValue: Number(common_1.AssigneeOption[value]) });
	        this.updateStorage(common_1.AssigneeOption[value]);
	        this.props.disableButton(Number(common_1.AssigneeOption[value]) == common_1.AssigneeOption.ByTask);
	    };
	    SwitchPanel.prototype.updateStorage = function (value) {
	        storage_1.ComponentStorage.SetValue(this.name, value);
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
/* 5 */
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
	var common_1 = __webpack_require__(5);
	var specific_1 = __webpack_require__(7);
	var auto_1 = __webpack_require__(10);
	var task_1 = __webpack_require__(11);
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
	                return React.createElement("div", null, "Unknown option");
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
	var storage_1 = __webpack_require__(9);
	var Select2Ajax = (function (_super) {
	    __extends(Select2Ajax, _super);
	    function Select2Ajax(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            selectedValues: _this.props.data || []
	        };
	        _this.updateStorage();
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
	                return;
	            }
	        }
	        this.updateStorage();
	    };
	    Select2Ajax.prototype.updateStorage = function () {
	        storage_1.ComponentStorage.SetValue(this.props.name, this.ids);
	    };
	    Select2Ajax.prototype.render = function () {
	        return React.createElement("input", { className: "full-width", name: this.props.name, type: "text", id: this.props.id, value: this.ids, onChange: this.handlePickerChange });
	    };
	    return Select2Ajax;
	}(React.Component));
	exports.Select2Ajax = Select2Ajax;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ComponentStorage = (function () {
	    function ComponentStorage() {
	    }
	    ComponentStorage.SetValue = function (id, value) {
	        ComponentStorage.values[id] = value;
	    };
	    ComponentStorage.GetValue = function (id) {
	        return ComponentStorage.values[id];
	    };
	    ComponentStorage.GetStorage = function () {
	        return ComponentStorage.values;
	    };
	    return ComponentStorage;
	}());
	ComponentStorage.values = {};
	exports.ComponentStorage = ComponentStorage;


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
	var storage_1 = __webpack_require__(9);
	var AutoSection = (function (_super) {
	    __extends(AutoSection, _super);
	    function AutoSection(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            preferences: "1",
	            companyTags: [],
	            userTags: []
	        };
	        storage_1.ComponentStorage.SetValue("preferences", _this.state.preferences);
	        _this.handlePreferenceChange = _this.handlePreferenceChange.bind(_this);
	        return _this;
	    }
	    AutoSection.prototype.handlePreferenceChange = function (event) {
	        this.setState({ preferences: event.target.value });
	        storage_1.ComponentStorage.SetValue("preferences", event.target.value);
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
/* 11 */
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
/* 12 */
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
	var taskAssigneeSection_1 = __webpack_require__(13);
	var storage_1 = __webpack_require__(9);
	var TaskAssigneeWrapper = (function (_super) {
	    __extends(TaskAssigneeWrapper, _super);
	    function TaskAssigneeWrapper(props) {
	        var _this = _super.call(this, props) || this;
	        _this.taskAssingmentUrl = "/api/assignment/createtasks/";
	        _this.model = [];
	        _this.taskAssingmentUrl += _this.props.model.taskType;
	        _this.state = { isLoaded: false };
	        _this.componentWillMount = _this.componentWillMount.bind(_this);
	        return _this;
	    }
	    TaskAssigneeWrapper.prototype.componentWillMount = function () {
	        var _this = this;
	        var model = {
	            workflowIds: this.props.model.workflowIds,
	            assigneeOptions: storage_1.ComponentStorage.GetStorage()
	        };
	        $.post(this.taskAssingmentUrl, model).then(function (result) {
	            _this.model = result.items;
	            //console.log(this.model);
	            _this.setState({ isLoaded: true });
	        });
	    };
	    TaskAssigneeWrapper.prototype.render = function () {
	        if (this.state.isLoaded) {
	            return (React.createElement("div", null, this.model.map(function (prop, index) {
	                return React.createElement(taskAssigneeSection_1.TaskAssigneeSection, { workflow: prop.workflow, users: prop.users, key: prop.workflow.workflowId, taskIndex: index });
	            })));
	        }
	        return React.createElement("div", null, "Loading...");
	    };
	    return TaskAssigneeWrapper;
	}(React.Component));
	exports.TaskAssigneeWrapper = TaskAssigneeWrapper;


/***/ },
/* 13 */
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
	var taskAssigneeTable_1 = __webpack_require__(14);
	var TaskAssigneeSection = (function (_super) {
	    __extends(TaskAssigneeSection, _super);
	    function TaskAssigneeSection() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(TaskAssigneeSection.prototype, "noSupplierStyle", {
	        get: function () {
	            return {
	                "style": "color: red"
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TaskAssigneeSection.prototype.render = function () {
	        var _this = this;
	        var body;
	        if (this.props.users && this.props.users.length) {
	            body = this.props.users.map(function (u, index) {
	                return React.createElement(taskAssigneeTable_1.TaskAssigneeTable, { key: u.id, id: u.id, taskIndex: _this.props.taskIndex, assigneeIndex: index, name: u.name, companyName: u.companyName, gravatar: u.gravatar, companyTags: u.companyTags, userTags: u.userTags, languages: u.languages });
	            });
	        }
	        else {
	            body = React.createElement("tr", null,
	                React.createElement("td", null,
	                    React.createElement("span", { style: this.noSupplierStyle },
	                        React.createElement("em", null, "No suppliers are found for this task based on the selected assignment rule."))));
	        }
	        return (React.createElement("div", { className: "language-assignment" },
	            React.createElement("div", { className: "panel panel-default" },
	                React.createElement("div", { className: "panel-heading assignment-task-breadcrumb" },
	                    React.createElement("div", { className: "task-navigation" },
	                        React.createElement("ul", { className: "breadcrumb" },
	                            React.createElement("li", null, this.props.workflow.workflowName),
	                            React.createElement("li", null, this.props.workflow.language),
	                            React.createElement("li", null, this.props.workflow.taskName)))),
	                React.createElement("div", { className: "panel-body" },
	                    React.createElement("div", { className: "task-language-table" },
	                        React.createElement("table", { className: "table" },
	                            React.createElement("tbody", null, body)))))));
	    };
	    return TaskAssigneeSection;
	}(React.Component));
	exports.TaskAssigneeSection = TaskAssigneeSection;


/***/ },
/* 14 */
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
	var TaskAssigneeTable = (function (_super) {
	    __extends(TaskAssigneeTable, _super);
	    function TaskAssigneeTable(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            selected: true
	        };
	        _this.handleOnChange = _this.handleOnChange.bind(_this);
	        return _this;
	    }
	    Object.defineProperty(TaskAssigneeTable.prototype, "firstCell", {
	        get: function () {
	            return {
	                "style": "padding-left: 15px"
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TaskAssigneeTable.prototype, "gravatarCell", {
	        get: function () {
	            return {
	                "style": "width:16px; height:16px; border-radius:50% 50% 50% 50%; margin-top: -3px"
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TaskAssigneeTable.prototype, "valign", {
	        get: function () {
	            return {
	                "style": "vertical-align: middle"
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TaskAssigneeTable.prototype, "elementId", {
	        get: function () {
	            return "Tasks_" + this.props.taskIndex + "__Assignees_" + this.props.assigneeIndex + "__Selected";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TaskAssigneeTable.prototype, "elementName", {
	        get: function () {
	            return "AdvancedAssignment.Tasks[" + this.props.taskIndex + "].Assignees[" + this.props.assigneeIndex + "].Selected";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TaskAssigneeTable.prototype, "elementHiddenId", {
	        get: function () {
	            return "AdvancedAssignment.Tasks[" + this.props.taskIndex + "].Assignees[" + this.props.assigneeIndex + "].Id";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TaskAssigneeTable.prototype.handleOnChange = function () {
	        this.setState(function (prev, props) {
	            var selected = prev.selected;
	            prev.selected = !selected;
	            return prev;
	        });
	    };
	    TaskAssigneeTable.prototype.render = function () {
	        return (React.createElement("tr", null,
	            React.createElement("td", { width: "25", style: this.firstCell },
	                React.createElement("input", { type: "hidden", name: this.elementHiddenId, value: this.props.id }),
	                React.createElement("input", { checked: this.state.selected, className: "checkbox", id: this.elementId, name: this.elementName, type: "checkbox", onChange: this.handleOnChange })),
	            React.createElement("td", { style: this.valign, width: "250" },
	                React.createElement("a", { href: "#", className: "user-link" },
	                    React.createElement("div", { className: "assignee" },
	                        React.createElement("div", { className: "assigneePerson ", rel: "tipover", "data-url": "/tipover/user/54951", "data-original-title": "", title: "" },
	                            React.createElement("img", { style: this.gravatarCell, src: this.props.gravatar, alt: this.props.name })))),
	                this.props.name),
	            React.createElement("td", null, this.props.companyName),
	            React.createElement("td", null)));
	    };
	    return TaskAssigneeTable;
	}(React.Component));
	exports.TaskAssigneeTable = TaskAssigneeTable;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
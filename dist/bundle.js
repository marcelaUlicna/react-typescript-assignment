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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssigneeOption;
(function (AssigneeOption) {
    AssigneeOption[AssigneeOption["Specific"] = 0] = "Specific";
    AssigneeOption[AssigneeOption["Auto"] = 1] = "Auto";
    AssigneeOption[AssigneeOption["ByTask"] = 2] = "ByTask";
})(AssigneeOption = exports.AssigneeOption || (exports.AssigneeOption = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(0);
var switchPanel_1 = __webpack_require__(5);
var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6  well well-white assignee-component" },
                        React.createElement("h4", null,
                            React.createElement("strong", null, this.props.model.title)),
                        React.createElement(switchPanel_1.SwitchPanel, null)),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("h3", null, "right panel"))))));
    };
    return Panel;
}(React.Component));
exports.Panel = Panel;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var AssigneePanel = (function (_super) {
    __extends(AssigneePanel, _super);
    function AssigneePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssigneePanel.prototype.render = function () {
        switch (this.props.option) {
            case common_1.AssigneeOption.Specific:
                return React.createElement(SpecificSection, null);
            case common_1.AssigneeOption.Auto:
                return React.createElement(AutoSection, null);
            case common_1.AssigneeOption.ByTask:
                return React.createElement(ByTaskSection, null);
            default:
                React.createElement("div", null, "Unknown option");
        }
    };
    return AssigneePanel;
}(React.Component));
exports.AssigneePanel = AssigneePanel;
var SpecificSection = (function (_super) {
    __extends(SpecificSection, _super);
    function SpecificSection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { users: [] };
        return _this;
    }
    Object.defineProperty(SpecificSection.prototype, "userNames", {
        get: function () {
            return this.state.users.map(function (u) { return u.name; }).join();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecificSection.prototype, "userIds", {
        get: function () {
            return this.state.users.map(function (u) { return u.id; }).join();
        },
        enumerable: true,
        configurable: true
    });
    SpecificSection.prototype.handlePickerChange = function (event) {
    };
    SpecificSection.prototype.render = function () {
        return (React.createElement("div", { className: "form" },
            React.createElement("div", { className: "form-group" },
                React.createElement("select", { className: "specific-picker form-control" },
                    React.createElement("option", { value: "1" }, "User 1"),
                    React.createElement("option", { value: "2" }, "User 2"),
                    React.createElement("option", { value: "3" }, "User 3"),
                    React.createElement("option", { value: "4" }, "User 4"),
                    React.createElement("option", { value: "5" }, "User 5")))));
    };
    return SpecificSection;
}(React.Component));
var AutoSection = (function (_super) {
    __extends(AutoSection, _super);
    function AutoSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoSection.prototype.render = function () {
        return (React.createElement("div", null, "Auto option"));
    };
    return AutoSection;
}(React.Component));
var ByTaskSection = (function (_super) {
    __extends(ByTaskSection, _super);
    function ByTaskSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ByTaskSection.prototype.render = function () {
        return (React.createElement("div", null, "By task option"));
    };
    return ByTaskSection;
}(React.Component));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var assigneePanel_1 = __webpack_require__(4);
var SwitchPanel = (function (_super) {
    __extends(SwitchPanel, _super);
    function SwitchPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            option: common_1.AssigneeOption.Specific,
            userIds: [],
            preferences: "1",
            companyTagIds: [],
            userTagIds: [],
            taskName: ""
        };
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        return _this;
    }
    SwitchPanel.prototype.handleOptionChange = function (event) {
        this.setState({ option: Number(event.target.value) });
    };
    SwitchPanel.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "radio" },
                React.createElement("label", { className: "radio-switch" },
                    React.createElement("input", { type: "radio", value: common_1.AssigneeOption.Specific, checked: this.state.option == common_1.AssigneeOption.Specific, onChange: this.handleOptionChange }),
                    "specific"),
                React.createElement("label", { className: "radio-switch" },
                    React.createElement("input", { type: "radio", value: common_1.AssigneeOption.Auto, checked: this.state.option == common_1.AssigneeOption.Auto, onChange: this.handleOptionChange }),
                    "auto"),
                React.createElement("label", { className: "radio-switch" },
                    React.createElement("input", { type: "radio", value: common_1.AssigneeOption.ByTask, checked: this.state.option == common_1.AssigneeOption.ByTask, onChange: this.handleOptionChange }),
                    "by task")),
            React.createElement(assigneePanel_1.AssigneePanel, { option: this.state.option })));
    };
    return SwitchPanel;
}(React.Component));
exports.SwitchPanel = SwitchPanel;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var panel_1 = __webpack_require__(2);
var task = {
    taskId: 10023,
    title: "Assignee",
    hasPreviousTask: true
};
ReactDOM.render(React.createElement(panel_1.Panel, { model: task }), document.getElementById("example"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
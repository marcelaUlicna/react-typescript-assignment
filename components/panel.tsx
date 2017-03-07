import * as React from "react";

import { IPanel } from "./common";

import { SwitchPanel } from "./switchPanel";

import { TaskAssignmentTable } from "./taskTable";

interface ISwitcher {
    taskPanel: boolean;
}

export class Panel extends React.Component<IPanel, ISwitcher> {
    constructor(props: any) {
        super(props);
        this.state = { taskPanel: this.props.taskAssigneePanel || false };

        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel() {
        this.setState((prev, props) => prev.taskPanel = !prev.taskPanel);
    }

    render() {
        return (
            <div>
                <AssignentComponent model={this.props.model} taskAssigneePanel={this.state.taskPanel} toggleTaskPanel={this.togglePanel} />
                <TaskAssignmentComponent model={this.props.model} taskAssigneePanel={this.state.taskPanel} toggleTaskPanel={this.togglePanel} />
            </div>
        );
    }
}

class AssignentComponent extends React.Component<IPanel, ISwitcher> {
    get style() {
        return this.props.taskAssigneePanel ? { "display": "none" } : { "display": "block" };
    }

    render() {
        return (
            <div className="assignee-component" style={this.style}>
                <h4><strong>{this.props.model.title}</strong></h4>
                <div className="row">
                    <div className="col-md-9">
                        <SwitchPanel option={this.props.model.assigneeOptions} />
                    </div>
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-primary show-assignee-button"
                            onClick={this.props.toggleTaskPanel}>
                            Show task assignees
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}

class TaskAssignmentComponent extends React.Component<IPanel, ISwitcher> {
    render() {
        if (this.props.taskAssigneePanel) {
            return (
                <div className="task-assignee-component">
                    <h4><strong>{this.props.model.taskTitle}</strong></h4>
                    <div>
                        <button
                            type="button"
                            className="btn btn-default btn-sm cancel-button pull-right"
                            onClick={this.props.toggleTaskPanel}>
                            Cancel
                            </button>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <TaskAssignmentTable model={this.props.model} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}
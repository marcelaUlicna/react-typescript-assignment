import * as React from "react";

import { IPanel, AssigneeOption, ISwitcher } from "./common";

import { SwitchPanel } from "./switchPanel";

import { TaskAssignees } from "./assignment/taskAssignees";

export class Panel extends React.Component<IPanel, ISwitcher> {
    constructor(props: any) {
        super(props);
        this.state = { 
            taskPanel: this.props.taskAssigneePanel || false,
            assigneeOptions: this.props.model.assigneeOptions
        };

        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel() {
        this.setState((prev, props) => prev.taskPanel = !prev.taskPanel);
    }
    
    render() {
        let innerPanel = null;
        if (this.props.showAssigneeButton) {
            innerPanel = (
                <div>
                    <SwitchPanelWrapper model={this.props.model} taskAssigneePanel={this.state.taskPanel} toggleTaskPanel={this.togglePanel} />
                    <TaskAssignmentWrapper model={this.props.model} taskAssigneePanel={this.state.taskPanel} toggleTaskPanel={this.togglePanel} />
                </div>
            );
        } else {
            innerPanel = (
                <div className="row">
                    <div className="col-md-12">
                        <SwitchPanel option={this.props.model.assigneeOptions} />
                    </div>
                </div>
            );
        }

        return (
            <div className="assignee-component">
                <h4><strong>{this.props.model.title}</strong></h4>
                {innerPanel}
            </div>
        );
    }
}

class SwitchPanelWrapper extends React.Component<IPanel, ISwitcher> {
    get sectionStyle() {
        return this.props.taskAssigneePanel ? { "display": "none" } : { "display": "block" };
    }

    constructor(props: any) {
        super(props);
        this.state = { 
            taskPanel: this.props.taskAssigneePanel || false,
            assigneeOptions: this.props.model.assigneeOptions
        };
    }

    render() {
        return (
            <div className="row" style={this.sectionStyle}>
                    <div className="col-md-9">
                        <SwitchPanel option={this.state.assigneeOptions} />
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary show-assignee-button" onClick={this.props.toggleTaskPanel}>Show task assignees</button>
                    </div>
                </div>
        );
    }
}

class TaskAssignmentWrapper extends React.Component<IPanel, ISwitcher> {
    render() {
        if (this.props.taskAssigneePanel) {
            return (
                <div>
                    <div className="pull-right">
                        <button type="button" className="btn btn-default btn-sm" onClick={this.props.toggleTaskPanel}>Cancel</button>
                    </div>
                    <TaskAssignees model={this.props.model} />
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}
import * as React from "react";

import { IPanel, AssigneeOption, ISwitcher } from "./common";

import { SwitchPanel } from "./switchPanel";

import { TaskAssigneeWrapper } from "./assignment/taskAssigneeWrapper";

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
            assigneeOptions: this.props.model.assigneeOptions,
            disable: false
        };

        this.handleDisableButton = this.handleDisableButton.bind(this);
    }

    handleDisableButton(disable: boolean) {
        this.setState({disable: disable});
    }

    render() {
        return (
            <div className="row" style={this.sectionStyle}>
                    <div className="col-md-9">
                        <SwitchPanel option={this.state.assigneeOptions} disableButton={this.handleDisableButton} />
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="button" 
                            className="btn btn-primary show-assignee-button" 
                            value="Show task assignees"
                            onClick={this.props.toggleTaskPanel}
                            disabled={this.state.disable} />
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
                        <button type="button" className="btn btn-default btn-sm cancel-button" onClick={this.props.toggleTaskPanel}>Cancel</button>
                    </div>
                    <TaskAssigneeWrapper model={this.props.model} />
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}
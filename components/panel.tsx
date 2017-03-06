import * as React from "react";

import { IPanel } from "./common";

import { SwitchPanel } from "./switchPanel";

export class Panel extends React.Component<IPanel, void> {
    render() {
        return (
            <div className="assignee-component">
                <h4><strong>{this.props.model.title}</strong></h4>
                <div className="row">
                    <div className="col-md-9">
                        <SwitchPanel option={this.props.model.assigneeOptions} />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary show-assignee-button">Show task assignees</button>
                    </div>
                </div>
            </div>
        );
    }
}
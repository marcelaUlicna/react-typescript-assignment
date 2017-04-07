import * as React from "react";

import { IPanel } from "./common";

import { SwitchPanel } from "./switchPanel";

export class Panel extends React.Component<IPanel, void> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <AssignentComponent model={this.props.model} />
            </div>
        );
    }
}

class AssignentComponent extends React.Component<IPanel, void> {
    render() {
        return (
            <div className="assignee-component">
                <h4><strong>{this.props.model.title}</strong></h4>
                <div className="row">
                    <div className="col-md-12">
                        <SwitchPanel option={this.props.model.assigneeOptions} />
                    </div>
                </div>
            </div>
        );
    }
}
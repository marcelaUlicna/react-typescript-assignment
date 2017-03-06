///<reference path="../src/typings.d.ts" />

import * as React from "react";

import { IAssigneePanel, AssigneeOption, IAssignee } from "./common";

import { SpecificSection } from "./sections/specific";
import { AutoSection } from "./sections/auto";
import { ByTaskSection } from "./sections/task";

export class AssigneePanel extends React.Component<IAssigneePanel, IAssignee> {
    constructor(props: any) {
        super(props);
        this.state = this.props.component;
    }
    
    render() {
        switch(this.props.option) {
            case AssigneeOption.Specific:
                return <SpecificSection users={this.state.userModel} />;
            case AssigneeOption.Auto:
                return <AutoSection />;
            case AssigneeOption.ByTask:
                return <ByTaskSection />;
            default:
                <div>Unknown option</div>;
        }
    }
}
import * as React from "react";

import { IAssignee, IPanel, AssigneeOption } from "./common";
import { AssigneePanel } from "./assigneePanel";

export class SwitchPanel extends React.Component<any, IAssignee> {
    constructor(props: any) {
        super(props);
        this.state = {
            option: AssigneeOption.Specific,
            userIds: [],
            preferences: "1",
            companyTagIds: [],
            userTagIds: [],
            taskName: ""
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event: any) {
       this.setState({ option: Number(event.target.value) });
    }

    render() {
        return (
            <div>
                <div className="radio">
                    <label className="radio-switch">
                        <input 
                            type="radio" 
                            value={AssigneeOption.Specific} 
                            checked={this.state.option == AssigneeOption.Specific}
                            onChange={this.handleOptionChange} />specific
                    </label>
                    <label className="radio-switch">
                        <input type="radio" 
                        value={AssigneeOption.Auto} 
                        checked={this.state.option == AssigneeOption.Auto}
                        onChange={this.handleOptionChange} />auto
                    </label>
                    <label className="radio-switch">
                        <input type="radio" 
                        value={AssigneeOption.ByTask} 
                        checked={this.state.option == AssigneeOption.ByTask}
                        onChange={this.handleOptionChange} />by task
                    </label>
                </div>
                <AssigneePanel option={this.state.option} />
            </div>
        );
    }
}
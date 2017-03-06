import * as React from "react";

import { IAssignee, IPanel, AssigneeOption, ISwitchPanel } from "./common";
import { AssigneePanel } from "./assigneePanel";

interface IRadio {
    radioValue: AssigneeOption;
}

export class SwitchPanel extends React.Component<ISwitchPanel, IRadio> {
    constructor(props: any) {
        super(props);
        this.state = {
            radioValue: this.props.option.option
        };
 
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event: any) {
       const value = event.target.value;
       this.setState({ radioValue: Number(AssigneeOption[value]) });
    }

    render() {
        return (
            <div>
                <div className="radio">
                    <label className="radio-switch">
                        <input 
                            type="radio" 
                            value="Specific"
                            name="AssignmentOption"
                            checked={this.state.radioValue == AssigneeOption.Specific}
                            onChange={this.handleOptionChange} />by name
                    </label>
                    <label className="radio-switch">
                        <input 
                            type="radio" 
                            value="Auto"
                            name="AssignmentOption"
                            checked={this.state.radioValue == AssigneeOption.Auto}
                            onChange={this.handleOptionChange} />by preference
                    </label>
                    <label className="radio-switch">
                        <input 
                            type="radio" 
                            value="ByTask"
                            name="AssignmentOption"
                            checked={this.state.radioValue == AssigneeOption.ByTask}
                            onChange={this.handleOptionChange} />by other task
                    </label>
                </div>
                <AssigneePanel option={this.state.radioValue} component={this.props.option} />
            </div>
        );
    }
}
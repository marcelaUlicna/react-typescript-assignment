import * as React from "react";

import { IAssignee, IPanel, AssigneeOption, ISwitchPanel } from "./common";
import { AssigneePanel } from "./assigneePanel";
import { ComponentStorage } from "./storage";

interface IRadio {
    radioValue: AssigneeOption;
}

export class SwitchPanel extends React.Component<ISwitchPanel, IRadio> {
    private name: string = "AssignmentOption";
    
    constructor(props: any) {
        super(props);
        this.state = {
            radioValue: this.props.option.option
        };

        ComponentStorage.SetValue(this.name, this.state.radioValue);
 
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event: any) {
       const value = event.target.value;
       this.setState({ radioValue: Number(AssigneeOption[value]) });
       this.updateStorage(AssigneeOption[value]);
    }

    updateStorage(value: any) {
        ComponentStorage.SetValue(this.name, value);
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
import * as React from 'react';

import { ITaskAssignee } from '../common';

interface ISelectAssignee {
    selected: boolean;
}

export class TaskAssigneeTable extends React.Component<ITaskAssignee, ISelectAssignee> {
    constructor(props: any) {
        super(props);
        this.state = {
            selected: true
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    get firstCell() {
        return {
            "style": "padding-left: 15px"
        };
    }

    get gravatarCell() {
        return {
            "style": "width:16px; height:16px; border-radius:50% 50% 50% 50%; margin-top: -3px"
        }
    }

    get valign() {
        return {
            "style": "vertical-align: middle"
        };
    }

    get elementId() {
        return `Tasks_${this.props.taskIndex}__Assignees_${this.props.assigneeIndex}__Selected`;
    }

    get elementName() {
        return `AdvancedAssignment.Tasks[${this.props.taskIndex}].Assignees[${this.props.assigneeIndex}].Selected`;
    }

    get elementHiddenId() {
        return `AdvancedAssignment.Tasks[${this.props.taskIndex}].Assignees[${this.props.assigneeIndex}].Id`;
    }

    handleOnChange() {
        this.setState((prev, props) => {
            let selected = prev.selected;
            prev.selected = !selected;
            return prev;
        });
    }

    render() {
        return (
            <tr>
                <td width="25" style={this.firstCell}>
                    <input type="hidden" name={this.elementHiddenId} value={this.props.id} />
                    <input checked={this.state.selected}
                        className="checkbox"
                        id={this.elementId}
                        name={this.elementName}
                        type="checkbox"
                        onChange={this.handleOnChange} />
                </td>
                <td style={this.valign} width="250">
                    <a href="#" className="user-link">
                        <div className="assignee">
                            <div className="assigneePerson " rel="tipover" data-url="/tipover/user/54951" data-original-title="" title="">
                                <img style={this.gravatarCell} src={this.props.gravatar} alt={this.props.name} />
                            </div>
                        </div>
                    </a>
                    {this.props.name}
                </td>
                <td>{this.props.companyName}</td>
                <td></td>
            </tr>
        );
    }
}
import * as React from 'react';

import { ITaskAssignee } from '../common';

export class TaskAssigneeTable extends React.Component<ITaskAssignee, void> {
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

    render() {
        return (
            <tr>
                <td width="25" style={this.firstCell}>
                    <input checked={true}
                        className="checkbox"
                        id="Tasks_0__Assignees_0__Selected"
                        name="AdvancedAssignment.Tasks[0].Assignees[0].Selected"
                        type="checkbox"
                        value="true" />
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
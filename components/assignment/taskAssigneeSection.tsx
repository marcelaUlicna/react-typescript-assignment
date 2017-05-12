import * as React from 'react';

import { ITaskAssigneeTable } from '../common';
import { TaskAssigneeTable } from './taskAssigneeTable';

export class TaskAssigneeSection extends React.Component<ITaskAssigneeTable, void> {
    get noSupplierStyle() {
        return {
            "style": "color: red"
        };
    }

    render() {
        let body;
        if (this.props.users && this.props.users.length) {
            body = this.props.users.map((u, index) => 
                <TaskAssigneeTable 
                    key={u.id}
                    id={u.id}
                    taskIndex={this.props.taskIndex}
                    assigneeIndex={index}
                    name={u.name} 
                    companyName={u.companyName} 
                    gravatar={u.gravatar}
                    companyTags={u.companyTags}
                    userTags={u.userTags}
                    languages={u.languages} />
            );
        } else {
            body = <tr><td><span style={this.noSupplierStyle}><em>No suppliers are found for this task based on the selected assignment rule.</em></span></td></tr>;
        }

        return (
            <div className="language-assignment">
                <div className="panel panel-default">
                    <div className="panel-heading assignment-task-breadcrumb">
                        <div className="task-navigation">
                            <ul className="breadcrumb">
                                <li>{this.props.workflow.workflowName}</li>
                                <li>{this.props.workflow.language}</li>
                                <li>{this.props.workflow.taskName}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="task-language-table">
                            <table className="table">
                                <tbody>
                                    {body}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
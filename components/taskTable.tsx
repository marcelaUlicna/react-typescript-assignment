///<reference path="../src/typings.d.ts" />

import * as React from "react";

import { IPanel } from "./common";

interface IUsers {
    users: any[];
    error: string;
    finished: boolean;
}

export class TaskAssignmentTable extends React.Component<IPanel, IUsers> {

    assignees: any;

    error: string = "Get assignee failed.";

    constructor(props: any) {
        super(props);
        this.state = { users: [], error: "", finished: false };
    }

    componentWillMount() {
        let form = this.props.model.element.closest('form');
        let formData = form.serialize();

        $.ajax({
            url: this.props.model.taskAssignmentUrl,
            data: formData,
            type: 'POST'
        }).then((data, textStatus, xhr) => {
            this.setState((prev: IUsers, props) => {
                prev.finished = true;
                if (xhr.statusText == "OK") {
                    prev.users = data.items;
                } else {
                    prev.error = `Get assignee failed. Error: ${xhr.statusText}`;
                }

                return prev;
            });
        });
    }

    render() {
        if (!this.state.finished) {
            return <div>Loading...</div>;
        }

        if (!!this.state.error) {
            return <div>{this.state.error}</div>;
        }

        return (
            <div>
                {this.state.users.map((item: any, index: number) => {
                    return <Table data={item} level={index} key={"level_" + index} />;
                })}
            </div>
        );
    }
}

interface ITable {
    level: number;
    data: any;
    //handleSelected: (levelId: number, userId: number) => void;
}

interface IUserItem {
    levelId: number;
    userId: number;
    name: string;
    company: string;
    selected: boolean;
}

interface IUserItemCollection {
    users: IUserItem[];
    level: number;
}

class Table extends React.Component<ITable, void> {
    get namePrefix() {
        return `Tasks[${this.props.level}]`;
    }

    render() {
        console.log("Table", this.props);
        const key = "user_table_" + this.props.level;
        const taskName = "Tasks[" + this.props.level + "].TaskName";
        const taskId = "Tasks[" + this.props.level + "].taskId";
        const targetLanguage = "Tasks[" + this.props.level + "].TargetLanguage";
        const targetLanguageId = "Tasks[" + this.props.level + "].TargetLanguageId";
        const workflowId = "Tasks[" + this.props.level + "].WorkflowId";

        return (
            <div className={"task-language-level-" + this.props.level} data-task-position={this.props.level}>
                <input type="hidden" name={taskName} value={this.props.data.taskName} />
                <input type="hidden" name={taskId} value={this.props.data.taskId} />
                <input type="hidden" name={targetLanguage} value={this.props.data.targetLanguage} />
                <input type="hidden" name={targetLanguageId} value={this.props.data.targetLanguageId} />
                <input type="hidden" name={workflowId} value={this.props.data.workflowId} />
                <div className="panel panel-default">
                    <div className="panel-heading assignment-task-breadcrumb">
                        <div className="task-navigation">
                            <ul className="breadcrumb">
                                <li>{this.props.data.workflowName}</li>
                                <li>{this.props.data.targetLanguage}</li>
                                <li>{this.props.data.taskName}</li>
                            </ul>
                        </div>
                        <div className="pull-right">
                            <a href="javascript:void(0)" className="task-language-edit">Edit</a>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="task-language-table">
                            <UserItemTable users={this.props.data.users} level={this.props.level} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class UserItemTable extends React.Component<any, void> {
    get style() {
        return {
            "padding-left": "15px"
        }
    }

    render() {
        console.log(this.props);

        if (!this.props.users.length) {
            return <div className="text-dangerous"><em>No suppliers are found for this task.</em></div>;
        }

        return (
            <table className="table">
                <tbody>
                    {this.props.users.map((value: IUserItem, index: number) => {
                        const assigneeId = "Tasks[" + this.props.level + "].Assignees[" + index + "].Id";
                        const assigneeSelected = "Tasks[" + this.props.level + "].Assignees[" + index + "].Selected";
                        
                        return (
                            <tr>
                                <input type="hidden" name={assigneeId} value={value.userId} />
                                <td width="25" style={this.style}>
                                    <input type="checkbox" checked={value.selected} name={assigneeSelected} />
                                </td>
                                <td>{value.name}</td>
                                <td>{value.company}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}
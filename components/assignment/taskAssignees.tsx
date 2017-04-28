import * as React from 'react';

import { IPanel } from '../common';
import { ComponentStorage } from "../storage";

export class TaskAssignees extends React.Component<IPanel, void> {
    taskAssingmentUrl: string = "/api/assignment/createtasks/";
    
    constructor(props: any) {
        super(props);
        this.taskAssingmentUrl += this.props.model.taskType;
    }
    
    componentWillMount() {
        let model = {
            workflowIds: this.props.model.workflowIds,
            assigneeOptions: ComponentStorage.GetStorage()
        };
        $.post(this.taskAssingmentUrl, model).then((result) => {
            console.log("result from server");
            console.log(result);
        });
    }
    
    render() {
        return (
            <div>
                Here will be tables with assignees for each task.
            </div>
        );
    }
}
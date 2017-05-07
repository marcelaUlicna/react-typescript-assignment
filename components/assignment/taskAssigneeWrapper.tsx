import * as React from 'react';

import { IPanel, ITaskAssigneeTable } from '../common';
import { TaskAssigneeSection } from './taskAssigneeSection';
import { ComponentStorage } from "../storage";

interface IModelState {
    isLoaded: boolean;
}

export class TaskAssigneeWrapper extends React.Component<IPanel, IModelState> {
    taskAssingmentUrl: string = "/api/assignment/createtasks/";

    model: ITaskAssigneeTable[] = [];

    constructor(props: any) {
        super(props);
        this.taskAssingmentUrl += this.props.model.taskType;

        this.state = { isLoaded: false };

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        let model = {
            workflowIds: this.props.model.workflowIds,
            assigneeOptions: ComponentStorage.GetStorage()
        };
        $.post(this.taskAssingmentUrl, model).then((result) => {
            this.model = result.items;
            //console.log(this.model);
            this.setState({ isLoaded: true });
        });
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    {this.model.map((prop) =>
                        <TaskAssigneeSection workflow={prop.workflow} users={prop.users} key={prop.workflow.workflowId} />
                    )}
                </div>
            );
        }

        return <div>Loading...</div>;
    }
}
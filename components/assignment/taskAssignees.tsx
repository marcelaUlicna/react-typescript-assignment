import * as React from 'react';

import { IPanel } from '../common';
import { ComponentStorage } from "../storage";

export class TaskAssignees extends React.Component<IPanel, void> {
    render() {
        console.log(ComponentStorage.GetStorage());
        
        return (
            <div>
                Here will be tables with assignees for each task.
            </div>
        );
    }
}
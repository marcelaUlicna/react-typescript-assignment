import * as React from 'react';

import { IPanel } from '../common';

export class TaskAssignees extends React.Component<IPanel, void> {
    render() {
        console.log(this.props.model);
        
        return (
            <div>
                Here will be tables with assignees for each task.
            </div>
        );
    }
}
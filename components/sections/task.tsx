import * as React from "react";

import { Select2Ajax, ISelect2Data } from "../select2/select2";

export class ByTaskSection extends React.Component<any, void> {
    
    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-12">
                        <Select2Ajax 
                            id="taskPicker" 
                            name="taskPicker"
                            url="/api/tasks"
                            multiple={false}
                            placeholder="Select task" />
                        <small className="text-muted">
                            Set the same assignee as on the selected task from current workflow.
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}
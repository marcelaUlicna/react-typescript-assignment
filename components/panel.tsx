import * as React from "react";

import { SwitchPanel } from "./switchPanel";

export class Panel extends React.Component<any, void> {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-md-6  well well-white assignee-component">
                            <h4><strong>{this.props.model.title}</strong></h4>
                            <SwitchPanel />
                        </div>
                        <div className="col-md-6">
                            <h3>right panel</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
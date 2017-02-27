import * as React from "react";

import { IAssigneePanel, AssigneeOption } from "./common";

export class AssigneePanel extends React.Component<IAssigneePanel, void> {
    render() {
        switch(this.props.option) {
            case AssigneeOption.Specific:
                return <SpecificSection />;
            case AssigneeOption.Auto:
                return <AutoSection />;
            case AssigneeOption.ByTask:
                return <ByTaskSection />;
            default:
                <div>Unknown option</div>;
        }
    }
}

interface IUser {
    id: number;
    name: string;
}

interface ISpecific {
    users: IUser[];
}

class SpecificSection extends React.Component<any, ISpecific> {
    get userNames() {
        return this.state.users.map(u => u.name).join();
    }

    get userIds() {
        return this.state.users.map(u => u.id).join();
    }
    
    constructor(props: any) {
        super(props);
        this.state = { users: [] };
    }

    handlePickerChange(event: any) {

    }
    
    render() {
        return (
            <div className="form">
                <div className="form-group">
                    <select className="specific-picker form-control">
                        <option value="1">User 1</option>
                        <option value="2">User 2</option>
                        <option value="3">User 3</option>
                        <option value="4">User 4</option>
                        <option value="5">User 5</option>
                    </select>
                </div>
            </div>
        );
    }
}

class AutoSection extends React.Component<any, void> {
    render() {
        return (
            <div>
                Auto option
            </div>
        );
    }
}

class ByTaskSection extends React.Component<any, void> {
    render() {
        return (
            <div>
                By task option
            </div>
        );
    }
}
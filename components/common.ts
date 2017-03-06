import { ISelect2Data, ISelect2Options, ISelect2 } from "./select2/select2";

export enum AssigneeOption {
    Specific,
    Auto,
    ByTask
}

// compponent states
export interface IAssignee {
    option: AssigneeOption;
    userIds: number[];
    userModel: ISelect2Data[];
    preferences: string;
    companyTagIds: number[];
    companyTagModel: ISelect2Data[];
    userTagIds: number[];
    userTagModel: ISelect2Data[];
    taskName: string;
}

// component properties
export interface ITask {
    taskId: number;
    hasPreviousTask: boolean;
    title: string;
    taskTitle: string;
    assigneeOptions: IAssignee;
}

export interface IPanel {
    model: ITask;
    taskAssigneePanel?: boolean;
    toggleTaskPanel?: () => void;
}

export interface ISwitchPanel {
    option: IAssignee;
}

export interface IAssigneePanel {
    option: AssigneeOption;
    component: IAssignee;
}

// option panels

export interface ISpecific {
    users: ISelect2Data[];
}

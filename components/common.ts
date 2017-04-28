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
    element: JQuery;
    taskId: number;
    taskIds: number[];
    workflowIds: number[];
    taskType: string;
    hasPreviousTask: boolean;
    title: string;
    taskTitle: string;
    taskAssignmentUrl: string;
    assigneeOptions: IAssignee;
}

// panel state
export interface ISwitcher {
    taskPanel: boolean;
    assigneeOptions: IAssignee;
}

export interface IPanel {
    model: ITask;
    showAssigneeButton?: boolean;
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

// assignee table properties

export interface ITaskAssigneeTable {
    workflowId: number;
    workflowName: string;
    taskName: string;
    language: string;
    taskUsers: ITaskAssignee[];
}

export interface ITaskAssignee {
    id: number;
    name: string;
    gravatar: string;
    companyId: number;
    companyName: string;
    companyTagIds: number[];
    userTags: number[];
    language: string;
}
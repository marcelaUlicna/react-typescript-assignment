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
    disable?: boolean;
    //toggleAssigneeOption?: () => void;
}

export interface IPanel {
    model: ITask;
    showAssigneeButton?: boolean;
    taskAssigneePanel?: boolean;
    toggleTaskPanel?: () => void;
}

export interface ISwitchPanel {
    option: IAssignee;
    disableButton?: (disabled: boolean) => void;
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
    workflow: ITaskWorkflow;
    users: ITaskAssignee[];
    taskIndex: number;
    fromTask?: string;
}

export interface ITaskWorkflow {
    workflowId: number;
    workflowName: string;
    taskType: string;
    taskName: string;
    language: string;
}

export interface ITaskAssignee {
    id: number;
    taskIndex: number;
    assigneeIndex: number;
    name: string;
    gravatar: string;
    companyName: string;
    companyTags: number[];
    userTags: number[];
    languages: string[];
}
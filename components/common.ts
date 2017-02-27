export enum AssigneeOption {
    Specific,
    Auto,
    ByTask
}

// compponent states
export interface IAssignee {
    option: AssigneeOption,
    userIds: Array<number>;
    preferences: string;
    companyTagIds: Array<number>;
    userTagIds: Array<number>;
    taskName: string;
}

// component properties
export interface ITask {
    taskId: number;
    hasPreviousTask: boolean;
    title: string;
}

export interface IPanel {
    model: ITask;
}

export interface IAssigneePanel {
    option: AssigneeOption
}
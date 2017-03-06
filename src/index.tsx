import * as React from "react";
import * as ReactDOM from "react-dom";

// assignee component

import { ITask, AssigneeOption } from "../components/common";
import { Panel } from "../components/panel";

const task: ITask = {
    taskId: 10023,
    title: "Assignees",
    hasPreviousTask: true,
    assigneeOptions: {
        option: AssigneeOption.Specific,
        userIds: [3,4,6,7],
        userModel: [
            { "id": 3, "text": "Bryant E. Aiello"},
            { "id": 4, "text": "Linda Alston"},
            { "id": 6, "text": "Stephen Quincy"},
            { "id": 7, "text": "Floyd Lloyd"}
        ],
        preferences: "1",
        companyTagIds: [],
        companyTagModel: [],
        userTagIds: [],
        userTagModel: [],
        taskName: ""
    }
};


ReactDOM.render(
    <Panel model={task} />,
    document.getElementById("example")
);


// Select2 components

import { Select2Ajax } from "../components/select2/select2";

const selectData = [
    { "id": 3, "text": "Bryant E. Aiello"},
    { "id": 4, "text": "Linda Alston"},
    { "id": 6, "text": "Stephen Quincy"},
    { "id": 7, "text": "Floyd Lloyd"}
];

ReactDOM.render(
    <Select2Ajax 
        id="userPicker1" 
        name="userPicker1"
        url="/api/users"
        multiple={true}
        placeholder="Select users"
        required={true}
        data={selectData} />,
    document.getElementById("selectMultiple")
);

ReactDOM.render(
    <Select2Ajax 
        id="userPicker2" 
        name="userPicker2"
        url="/api/users"
        placeholder="Select users"
        required={true}
        data={[]} />,
    document.getElementById("selectSingle")
);

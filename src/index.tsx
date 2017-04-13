import * as React from "react";
import * as ReactDOM from "react-dom";

// assignee component

import { ITask, AssigneeOption } from "../components/common";
import { Panel } from "../components/panel";

$.ajax('/api/task/100/assignment').then((data) => {
    var task: ITask = data.model;
    task.element = $("#example");
    renderPicker(task);
});

function renderPicker(task: ITask) {
    ReactDOM.render(
        <Panel model={task} showAssigneeButton={true} />,
        document.getElementById("example")
    );
}

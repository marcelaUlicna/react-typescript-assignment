import * as React from "react";
import * as ReactDOM from "react-dom";

import { ITask } from "../components/common";
import { Panel } from "../components/panel";

const task: ITask = {
    taskId: 10023,
    title: "Assignee",
    hasPreviousTask: true
};

ReactDOM.render(
    <Panel model={task} />,
    document.getElementById("example")
);

import React, {FunctionComponent} from "react";
import {Task} from "../store/types";
import {TaskItem} from "./TaskItem";
import {TaskItemActions} from "./TaskPanel";

export const TaskList: FunctionComponent<{
    tasks: Task[],
    actions: TaskItemActions
}> = (props) => {
    return (
        <div className={'task-list'}>
            {props.tasks.map(task => {
                return (
                    <TaskItem key={task.id} task={task} actions={props.actions}/>
                )
            })}
        </div>
    )
};
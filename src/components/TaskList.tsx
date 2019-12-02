import React, {FunctionComponent} from "react";
import {TaskItem} from "./TaskItem";
import {Task} from "../store/types";

interface Props {
    tasks: Task[]
    actions: {
        remove: (id: number) => void
        toggle: (id: number) => void
    }
}

export const TaskList: FunctionComponent<Props> = (props) => {
    return (
        <div className={'task-list'}>
            {props.tasks.map(task => {
                return (
                    <TaskItem key={task.id}
                              task={task}
                              toggle={props.actions.toggle!}
                              remove={props.actions.remove!}
                    />
                )
            })}
        </div>
    )
};
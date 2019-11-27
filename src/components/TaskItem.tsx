import React, {FunctionComponent} from "react";
import {Task} from "../store/types";
import {TaskItemActions} from "./TaskPanel";

const getOrderingStyle = (id: number) => {
    return {
        order: id
    }
};

export const TaskItem: FunctionComponent<{
    task: Task, actions: TaskItemActions
}> = (props) => {
    let task = props.task;
    let toggle = props.actions.toggle;
    let remove = props.actions.remove;

    const onRemove = (e: React.MouseEvent) => {
        remove(props.task.id)
    };

    const onToggle = (e: React.MouseEvent) => {
        toggle(props.task.id)
    };

    let style = {order: task.finished ? task.id * 2 + 1 : 0};

    return (
        <div style={style} className={'item-container ' + (task.finished ? 'finished' : '')}>
            <div className={'item-block'}>
                <div className={'item-pad toggle-pad'} onClick={onToggle}>
                    <p>
                        {task.title}
                    </p>
                </div>
                <div className={'item-pad remove-pad'} onClick={onRemove}>

                </div>
            </div>
        </div>
    )
};
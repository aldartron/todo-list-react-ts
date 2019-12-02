import React, {FunctionComponent} from "react";
import {Task} from "../store/types";
import {Link} from "react-router-dom";

interface Props {
    task: Task
    toggle: (id: number) => void
    remove: (id: number) => void
}

export const TaskItem: FunctionComponent<Props> = (props) => {
    let task = props.task;
    let toggle = props.toggle;
    let remove = props.remove;

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
                </div>
                <Link to={'/todo/' + task.id}>
                    <div className={'item-pad select-pad'}>
                        <p>
                            {task.title}
                        </p>
                    </div>
                </Link>
                <div className={'item-pad remove-pad'} onClick={onRemove}>
                </div>
            </div>
        </div>
    )
};
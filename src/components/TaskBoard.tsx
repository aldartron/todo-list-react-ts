import {TaskForm} from "./TaskForm";
import {TaskList} from "./TaskList";
import React, {Component} from "react";
import {Task} from "../store/types";

interface Props {
    tasks: Task[]
    actions: {
        add: (task: Task) => void
        remove: (id: number) => void
        toggle: (id: number) => void
    }
}

export class TaskBoard extends Component<Props> {

    render() {
        let actions = this.props.actions;
        let countUnfinished = this.props.tasks
            .filter(task => !task.finished)
            .length;
        return (
            <div>
                <p>Hi, there are {countUnfinished} tasks to do</p>
                <TaskForm nextId={this.props.tasks.length + 1}
                          saveTask={actions.add!}
                />
                <TaskList tasks={this.props.tasks}
                          actions={{
                              remove: actions.remove,
                              toggle: actions.toggle
                          }}
                />
            </div>
        )
    }
}
import React, {Component} from "react";
import {Task} from "../store/types";
import {TaskList} from "./TaskList";
import {TaskForm} from "./TaskForm";

interface State {
    tasks: Task[]
}

export interface TaskItemActions {
    remove(id: number): void
    toggle(id: number): void
}

class TaskPanel extends Component {

    state: State = {
        tasks: []
    };

    getTaskById(id: number): Task | undefined {
        return this.state.tasks.find(task => task.id == id);
    }

    add = (task: Task) => {
        this.state.tasks.push(task);
        this.setState({
            tasks: this.state.tasks,
        });
        console.log(this.state.tasks)
    };

    remove = (id: number) => {
        let taskToRemove = this.getTaskById(id);
        if (taskToRemove != null) {
            this.state.tasks.splice(
                this.state.tasks.indexOf(taskToRemove), 1
            );
            this.setState({tasks:  this.state.tasks})
        }
    };

    toggle = (id: number) => {
        let taskToClose = this.getTaskById(id);
        if (taskToClose != null) {
            taskToClose.finished = !taskToClose.finished;
            this.setState({tasks: this.state.tasks})
        }
    };


    actions: TaskItemActions = {
        remove: this.remove,
        toggle: this.toggle
    };

    render() {
        let countUnfinished: number = this.state.tasks
            .filter(task => !task.finished)
            .length;

        return (
            <div>
                <p>Hi, there are {countUnfinished} tasks to do</p>
                <TaskForm saveTask={this.add}/>
                <TaskList tasks={this.state.tasks} actions={this.actions} />
            </div>
        )
    }

}

export default TaskPanel
    
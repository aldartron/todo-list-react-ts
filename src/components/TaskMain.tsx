import React, {Component} from "react";
import {Task} from "../store/types";
import {TaskCard} from "./TaskCard";
import {TaskBoard} from "./TaskBoard";
import {Switch, Route} from "react-router-dom";

interface State {
    tasks: Task[]
}

class TaskMain extends Component {

    state: State = {
        tasks: []
    };

    getTaskById(id: number): Task | undefined {
        return this.state.tasks.find(task => task.id === id);
    }

    commitTasks() {
        this.setState({
            tasks: this.state.tasks,
        });
    }

    add = (task: Task) => {
        this.state.tasks.push(task);
        this.commitTasks();
    };

    edit = (id: number, text: string) => {
        let tasks = this.state.tasks;
        let taskToEdit = this.getTaskById(id);
        if (!taskToEdit) {
            return
        }
        taskToEdit.title = text;
        let index = tasks.indexOf(taskToEdit);
        tasks[ index ] = taskToEdit;
        this.commitTasks();
    };

    remove = (id: number) => {
        let taskToRemove = this.getTaskById(id);
        if (taskToRemove != null) {
            this.state.tasks.splice(
                this.state.tasks.indexOf(taskToRemove), 1
            );
            this.commitTasks();
        }
    };

    toggle = (id: number) => {
        let taskToClose = this.getTaskById(id);
        if (taskToClose != null) {
            taskToClose.finished = !taskToClose.finished;
            this.commitTasks();
        }
    };

    renderTaskBoard = (props) => (
        <TaskBoard {...props}
                   tasks={this.state.tasks}
                   actions={{
                       add: this.add,
                       remove: this.remove,
                       toggle: this.toggle
                   }}
        />);

    renderTaskCard = (props) => (
        <TaskCard {...props}
                  tasks={this.state.tasks}
                  actions={{
                      add: this.add,
                      edit: this.edit,
                      remove: this.remove,
                      toggle: this.toggle
                  }}
        />);

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'}
                           render={this.renderTaskBoard}
                    />
                    <Route path={'/todo/:id'}
                           render={this.renderTaskCard}
                    />
                </Switch>
            </div>
        )
    }

}

export default TaskMain
    
import React, {ChangeEvent, Component, createRef} from "react";
import {Task} from "../store/types";

export interface TaskFormProps {
    saveTask(task: Task): void
}

export class TaskForm extends Component<TaskFormProps, Task> {

    state: Task = {
        title: "",
        finished: false,
        id: 0
    };

    taskInput = createRef<HTMLTextAreaElement>();

    onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!this.state.title) {
            return
        }
        this.props.saveTask(this.state);
        this.setState({
            title: "",
            finished: false,
            id: this.state.id + 1
        });
        if (this.taskInput.current) {
            this.taskInput.current.focus();
        }
    };

    onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({title: e.target.value})
    };

    render() {
        return (
            <div className={'item-block form-container'}>
                <textarea ref={this.taskInput}
                       value={this.state.title}
                       onChange={this.onChange}
                       className={'item-pad'}
                       placeholder="What you gonna do?"
                />
                <button type='submit' onClick={this.onClick}>Save</button>
            </div>
        )
    }

}

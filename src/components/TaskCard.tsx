import React, {Component} from "react";
import {Task} from "../store/types";
import {RouteComponentProps} from "react-router-dom"
import {Redirect} from "react-router"


interface Props extends RouteComponentProps<{id: string}> {
    tasks: Task[]
    actions: {
        add: (task: Task) => void
        edit: (id: number, text: string) => void
        remove: (id: number) => void
        toggle: (id: number) => void
    }
}

interface State {
    text: string
    finished: boolean
    toReturn: boolean
}

export class TaskCard extends Component<Props, State> {

    private readonly id: number;

    state = {
        text: "",
        finished: false,
        toReturn: false
    };

    constructor(props: Props) {
        super(props);
        this.id = +this.props.match.params.id;
    }

    componentDidMount(): void {
        let task = this.props
            .tasks
            .find(task => task.id === this.id);

        if (task) {
            this.setState({
                text: task.title,
                finished: task.finished,
            })
        } else {
            this.setState({toReturn: true})
        }
    }

    onSave = (e: React.MouseEvent) => {
        console.log(this.id);
        e.preventDefault();
        this.props.actions.edit(
            this.id,
            this.state.text
        );
        this.setState({toReturn: true})
    };

    onToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        this.setState({finished: !this.state.finished})
        this.props.actions.toggle(this.id);
    };

    onRemove = (e: React.MouseEvent) => {
        e.preventDefault();
        this.props.actions.remove(this.id);
        this.setState({toReturn: true});
    };

    render() {
        if (this.state.toReturn) {
            return (<Redirect push to={'/'}/>)
        }
        let finished = this.state.finished;
        return (
            <div className={'card-block'}>
                <div className={'card-control-block'}>
                    <div onClick={this.onSave}
                         className={'save-button'}
                    >Save</div>
                    <div onClick={() => this.setState({toReturn: true})}
                         className={'return-button'}
                    >Return</div>
                </div>
                <div className={'task-area text-area-' + (finished ? 'finished' : '')}>
                    <textarea onChange={event => this.setState({text: event.target.value})}
                              value={this.state.text}/>
                </div>
                <div className={'card-control-block'}>
                    <div onClick={this.onToggle}
                         className={'toggle-button toggle-button-' + (finished ? 'finished' : '')}
                    >
                        {finished ? 'Reopen' : 'Mark done'}
                    </div>
                    <div onClick={this.onRemove}
                         className={'remove-button'}
                    >
                        Remove
                    </div>
                </div>
            </div>
        )
    }
}
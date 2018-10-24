
// Basic React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Dependencies
import {toDoCreate} from '../actions';

function Task(props) {
    return <li>{props.description}</li>
}

class ToDo extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            inputText: ''
        };
    }
    render() {
        return (
            <div className="to-do">
                <form onSubmit={this.submitHandler}>
                    <input
                        value={this.state.inputText}
                        onChange={this.changeHandler}
                    />
                </form>
                <ul className="to-do-list">
                    {this.props.toDos.map(task => (
                        <Task key={task.id} description={task.description} />
                    ))}
                </ul>
            </div>
        );
    }

    //------------------------------------------------
    submitHandler = eventSubmit => {
        eventSubmit.preventDefault();
        let taskText = this.state.inputText;
        this.setState({inputText: ''});
        this.props.toDoCreate(taskText);
    }
    changeHandler = eventChange => {
        this.setState({
            inputText: eventChange.target.value
        });
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(
    mapStateToProps,
    {
        toDoCreate,
    }
)(ToDo);

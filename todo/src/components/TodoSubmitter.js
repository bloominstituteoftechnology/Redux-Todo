//do I need this? Or just add the submitter form to List?
import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction} from '../actions'
// src\actions\index.js
class TodoSubmitter extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            completed: false
        };
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    todoSubmitterHandler = e => {
        e.preventDefault();
        this.props.addTodoAction(this.state);
        this.setState({text:''})
    };

    render() {
        return (
          <div className = 'submitterForm'>
            <form onSubmit={this.todoSubmitterHandler} >
                <input
                    type='text'
                    name='text'
                    required min='1'
                    value={this.state.text}
                    onChange={this.inputHandler}
                />
                <button type='submit'>Add a Todo!</button>
            </form>
          </div>  
        )
    }
}

export default connect('', {addTodoAction})(TodoSubmitter);

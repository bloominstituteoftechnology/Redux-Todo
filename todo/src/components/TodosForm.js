import React from 'react';
import { connect } from 'react-redux';

import addTodo from '../actions/action'

class TodosForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    submitHandler = e => {
        e.preventDefault();
        if(this.state.text) {
        const todo = {
            todoText: this.state.text,
            completed: false,
            id: Date.now(),
        }
        this.props.addTodo(todo);
        this.setState({text: ''})
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value})

    render() {
        return  <form onSubmit={this.submitHandler}>
                    <input placeholder='add new todo...' value={this.state.text} name='text' onChange={this.changeHandler} ></input>
                    <button type='submit'>Click Here!</button>
                </form>
    }
}

export default connect(() => {return {}}, { addTodo })(TodosForm)
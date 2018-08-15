import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    addTodoHandler = e => {
        e.preventDefault();
        // this.props.addTodo(this.state.text)
        const { text } = this.state;
        const newTodo = {
            text
        };
        this.props.addTodo(newTodo)
        this.setState({
            text: ''
        })
    }

    todoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
      }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodoHandler} >
                    <input placeholder='Enter new task ...' name='text' value={this.state.text} onChange={this.todoInput} />
                    <button type='submit' >Let's Do It</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(TodoForm);
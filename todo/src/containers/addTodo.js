import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from '..actions';
import './addTodo.css';

class AddTodo extends Component {
    state = {
        currentItem: ''
    };

    handleChange = event => {
        this.setState({ currentItem: event.target.value });
    };

    submit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.currentItem);
        this.setState({ currentItem: '' });
    };

    toggleComplete = event => {
        event.preventDefault();
        this.props.completeTodo(event.target.id);
    };

    render() {
        return (
            <div>
                <form className='form'>
                <input className='taskbar'
                onChange={this.handleChange}
                type='text'
                placehikder='New Task'
                value={this.state.currentItem} />
                <button className='button' onClick={this.submit}>Add Task</button>
                </form>
                <ul>
                    {this.props.todo.map(item => {
                        return (
                            <li
                            className='todo'
                            onClick={this.toggleComplete}
                            key={item.id}
                            id={item.id}
                            style={
                                item.completed ? {
                                    textDecoration: 'line-through' } : null
                                }
                                >
                                {item.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state
    };
};

export default connect(mapStateToProps, { addTodo, completeTodo })(AddTodo);
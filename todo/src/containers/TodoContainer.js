import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../store/actions';

import TodoList from '../components/TodoList'

class TodoContainer extends Component {
    state = {
        inputText: '',
    };

    // Handles the input's value change
    handleChange = e => {this.setState({ inputText: e.target.value})};

    // Adds the state.inputText to the action to go to the reducer
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputText);
    }

    toggleTodo = index => {
        this.props.toggleTodo(index);
    }

    render() {
    return (
    <TodoList 
        handleChange={this.handleChange} 
        inputText={this.state.inputText} 
        toggleTodo={this.toggleTodo}
        todosList={this.props.todos}
        addTodo={this.addTodo}
    />);
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoContainer); // currying
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';


class TodoList extends Component {
    state = {
        todo: ''
    }

    handleNewTodo = (event) => {
        event.preventDefault();
        this.setState({todo: event.target.value});
    }

    addTodo = (event) => {
        event.preventDefault();
        let todoObj = { todoText: this.state.todo, completed: false }
        this.props.addTodo(todoObj);
        // console.log('enter was pressed', this.props)
        this.setState({todo: ''});
    }

    render() {
        // console.log(this.props.todos);
        return (
            <div>
                <form>
                    <input 
                    type="text" 
                    placeholder="Add Todo"
                    value={this.state.todo}
                    onChange={this.handleNewTodo}
                    />
                    <button onClick={this.addTodo}>Submit</button>
                </form>
                {this.state.todo}
                {this.props.todos.map(item => {
                    return <li key={item.todoText}>{item.todoText}</li>
                })}
            </div>
        );
    }
}

const mapStoreToProps = store => {
    return {
        todos: store
    };
};

export default connect(mapStoreToProps, { addTodo })(TodoList);
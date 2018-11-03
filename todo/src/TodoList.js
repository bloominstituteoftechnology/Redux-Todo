import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['sample 1', 'sample 2', 'sample 3']
        }
    }


    render() {
        return (
            <div>
                {this.state.todos.map(todo =>
                    <Todo todo={todo}/>
                )}
            </div>
        );
    }
}

export default TodoList;

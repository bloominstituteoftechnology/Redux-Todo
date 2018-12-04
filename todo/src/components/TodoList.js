import React, { Component } from 'react';
import Todo from './Todo';
import shortid from 'shortid'

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task => <Todo key={shortid.generate()} text={task.text} complete={task.complete} id={task.id} />)}
            </ul>
        )
    }
};

export default TodoList;
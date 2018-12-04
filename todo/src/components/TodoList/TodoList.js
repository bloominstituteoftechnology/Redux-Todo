import React from 'react';
import Todo from '../Todo/Todo';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    

    render() {
        return (
            <div className="todo-list-wrapper">
                <Todo/>
                {/* Map over todo items and populate the list */}
            </div>
        )
    }
}

export default TodoList;

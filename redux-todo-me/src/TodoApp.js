import React from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

class TodoApp extends React.Component {

    state = {
        todos: [],
        visibilityFilter: 'SHOW_ALL_TODOS'
    }

    render() {
        return (
            <div>
            <div>
                <AddTodo />
            </div>
                <VisibleTodos />
            </div>
        )
    }
}

export default TodoApp;
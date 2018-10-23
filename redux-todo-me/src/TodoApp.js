import React from 'react';
import AddTodo from './containers/AddTodo'

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
            </div>
        )
    }
}

export default TodoApp;
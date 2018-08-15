import React from 'react'

class TodoListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }
    render() {
        return (
            <div>Hello from TodoListContainer</div>
        )
    }
}

export default TodoListContainer;
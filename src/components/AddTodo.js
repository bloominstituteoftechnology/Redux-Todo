import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        todoText: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <form>
                    <input type="text" name="todoText" onChange={this.onChange} value={this.state.todoText} placeholder="Enter todo..." />
                    <button type="submit">Add Todo</button>
                </form>
            </>
        )
    }
}

export default AddTodo

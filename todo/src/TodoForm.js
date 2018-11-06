import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (event) => {
        this.setState({
            conentent: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state)
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>create new todo</label>
            <input type= "text" onChange={this.handleChange}/>
            </form>
        </div>
        )
    }
}

export default AddTodo
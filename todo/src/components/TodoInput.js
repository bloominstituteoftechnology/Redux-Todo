import React from 'react';

class TodoInput extends React.Component {
    state = {
        todoInput: '',
    }

    handleChange = e => {
        this.setState({ todoInput: e.target.value });
    }

    handleAddTodo = e => {
        e.preventDefault();
        if (!this.state.todoInput.trim()) return alert('Please enter a todo');
        this.props.addTodo(this.state.todoInput);
        this.setState({ todoInput: '' });
    }
    
    render(){
        return (
            <form onSubmit={this.handleAddTodo}>
                <input type="text" placeholder="Todo" onChange={this.handleChange} value={this.state.todoInput} />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}
export default TodoInput;
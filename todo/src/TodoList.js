import React, { Component } from 'react';

    //default state
class TodoList extends Component {
    constructor() {
        super();
        this.state = { 
            todos: [],
            newTodo: ''
        };
    }

    addTodo = (event) => {
        event.preventDefault(); 
        const todoList = this.state.todos;
        todoList.push(this.state.newTodo);
        this.setState({ 
            newTodo: '', 
            todos: todoList, 
        });
    };


    handleTodoInput = (event) => {
        this.setState({ newTodo: event.target.value }); 
    };


    render() {
      console.log(this.state.todos);
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoInput} placeholder="Add a new todo" value={this.state.newTodo} /> 
                    <button>Submit</button>
                </form>
                {this.state.todos.map((todo, index) => <div key={index}> {todo}</div>)}
            </div>
        );
    }
}

export default TodoList;

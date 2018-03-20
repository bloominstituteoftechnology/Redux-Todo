import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions/todoActions';

class Todo extends Component {
    state = {
        todos: '',
        toggle: false
    }

updateTodo = (event) => {
    console.log(event.target);
    this.setState({todos: event.target.value});
}

addTodoInput = (event) => {
   const {todos, toggle} = this.state
    console.log(event.target);
    event.preventDefault();
    this.props.addTodo({todos, toggle});
}

removeTodoInput = (event) => {
    this.props.removeTodo(event.target.getAttribute('id'));
}

toggleTodoInput = (event) => {
    this.props.toggleTodo(event.target.getAttribute('id'));
}

render() {
    console.log(this.props);
    return (
        <div className="Todo">
            <form onSubmit={this.addTodoInput}>
            <input
                onChange={this.updateTodo}
                placeholder="todo"
                value={this.state.todos}
            />
            <button value="addTodo" onClick={this.addTodoInput} type="submit">Add to todolist</button>
            </form>
            <ul>
                {this.props.todos.map((todo, index) => {
                    return(
                        <li onClick={() => this.toggleTodoInput()} key={index} id={index}>{todo.todos}</li>
                    )
                })}
                <li> Hello! </li>
            </ul>
            
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { addTodo, removeTodo, toggleTodo })(Todo);
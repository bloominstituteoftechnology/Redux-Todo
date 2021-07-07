import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addTodo, toggleTodo} from '../actions'

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    };

    handleTodoChange = e => {
        this.setState({ todo: e.target.value })
    }

    addTodoItem = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({todo: ''})
    }

    toggleCompleted = () => {

    }

    render() {
        console.log(this.props)
        const todos = this.props.todos;
        console.log(todos)
        if(todos.length === 0) {
            return(
                <form>
                    <input 
                    type="text" 
                    placeholder="Add To Do Item..."
                    onChange={this.handleTodoChange}
                    value={this.state.todo}/>
                    <button onClick={this.addTodoItem}>Add To Do</button>
                </form>
            )}
        return (  
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Add To Do Item..." 
                        onChange={this.handleTodoChange}
                        value={this.state.todo}/>
                    <button 
                        onClick={this.addTodoItem}>
                        Add To Do
                    </button>
                </form>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li 
                                key={todo.id} 
                                onClick={() => this.props.toggleTodo(todo.id)}
                                style={todo.completed === true ? {textDecoration: 'line-through'} : null}
                                >{todo.payload}</li>);
                        })}
                </ul>                
          </div>
        );
    }
}
 
const mapStateToProps = todos => {
    return {
        todos: todos
    };
};

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList);
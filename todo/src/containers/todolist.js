import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions'

import TodoItem from '../components/todoitem'
import './todolist.css'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text.trim();
        this.props.addTodo({
            text,
            completed: false
        });
        this.setState({
            text: ''
        })
    }
    handleChange = (e) => {
        const text = e.target.value;
        this.setState({
            text
        })
    }
    render() {
        return (
            <div className="todoList">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                </form>
                <ul>
                    { this.props.todos.map((todo, i) => (
                        <TodoItem key={i} todo={todo} remove={(e) =>{ e.stopPropagation(); this.props.removeTodo(i) }} toggleComplete={()=> { this.props.toggleTodo(i)}}/>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {
            dispatch(addTodo(todo));
        },
        removeTodo: id => {
            dispatch(removeTodo(id));
        },
        toggleTodo: id => {
            dispatch(toggleTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
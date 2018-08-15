import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo, getTodos } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        const myTodos = JSON.parse(localStorage.getItem('todos'));
        if(myTodos !== null) {
            this.props.getTodos(myTodos);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todos !== this.props.todos) {
            localStorage.setItem('todos', JSON.stringify(nextProps.todos));
        }
    }

    handleTodoComplete = todoId => {
        this.props.toggleTodo(todoId);
    };

    handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoHandler = e => {
        const {text} = this.state;
        const newTodo = {
            text,
            completed: false,
            id: this.props.todos ? this.props.todos.length + text : 0 + text
        };
        this.props.addTodo(newTodo);
        this.setState({
            text: ''
        });
    };

    removeTodos = () => {
        this.props.removeTodo();
    };
    render() {
        const { todos } = this.props;
        return (
            <div>
                <form>
                    <input onChange={this.handleTodoInput}
                    name="text"
                    value={this.state.texxt}
                    />
                    <button type="button" onClick={this.addTodoHandler}>
                    Add Todo
                    </button>
                </form>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li
                            onClick={() => this.handleTodoComplete(todo.id)}
                            style={
                                todo.completed ? { color: '#d3d3d3', textDecoration: 'line-through' }
                                : null
                            }
                            key={todo.id}
                            >
                            {todo.text}
                            </li>
                        );
                    })}
                </ul>
                <button onClick={() => this.removeTodos()}>Clear Completed</button>
            </div>
        );
    }
}

//TAKES WHATEVER STATE IN STORE IS AND THROWS IT
// ON PROPS IN THIS COMPONENT

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {
    addTodo,
    toggleTodo,
    removeTodo,
    getTodos
})(TodoList);
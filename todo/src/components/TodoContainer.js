import React, { Component } from 'react';
import { connect } from "react-redux";
import { newTodo, getTodo, toggleTodo } from "../actions";

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    const myTodos = JSON.parse(localStorage.getItem("todos"));
    if (myTodos !== null) {
      this.props.getTodo(myTodos);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      localStorage.setItem("todos", JSON.stringify(nextProps.todos));
    }
  }

  handleTodo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCompleteTodo = eachTodo => {
    this.props.toggleTodo(eachTodo);
  };

  newTodoHandler = event => {
    const { text } = this.state;
    const addTodo = {
        text,
        completed: false,
        id: this.props.todos ? this.props.todos.length + text : 0 + text
    };
    this.props.newTodo(addTodo);
    this.setState({
        text: ''
    });
  };


  render() {
      const { todos } = this.props;
    return (
        <div>
            <form>
                <input
                onChange={this.handleTodo}
                name="text"
                value={this.state.text}
                />
                <button onClick={this.newTodoHandler}>
                It never ends!
                </button>
            </form>
            <ul>
                {todos.map(todo => {
                    return (
                        <li
                        onClick={() => this.handleCompleteTodo(todo.id)}
                        style={
                            todo.completed
                            ? {color: '#6ef442' , textDecoration: 'line-through'}
                            : null
                        }
                        key={todo.id}
                        >
                        {todo.text}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };
   export default connect(mapStateToProps, {
    newTodo,
    toggleTodo,
    getTodo
  })(TodoContainer);
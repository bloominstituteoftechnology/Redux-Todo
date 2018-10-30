import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions'

let nextTodoId = 0;

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleTodoComplete = todoId => {
    this.props.toggleTodo(todoId);
  };

  handleTodoInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodoHandler = e => {
    const { text } = this.state;
    const newTodo = {
      text,
      completed: false,
      id: nextTodoId++
    };
    console.log(newTodo)
    this.props.addTodo(newTodo);
    this.setState({
      text: ''
    });
  };

  removeTodos = () => {
    this.props.removeTodos();
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <form>
          <input
            onChange={this.handleTodoInput}
            type='text'
            name='text'
            placeholder='next up...'
            value={this.state.text}
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
                  todo.completed
                    ? { color: 'red', textDecoration: 'line-through' }
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

  const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};


export default connect(mapStateToProps, {
addTodo,
toggleTodo,
removeTodos,
getTodos
})(TodoList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from './Actions';


class App extends Component {
  constructor(props){
    super(props); 
    this.state={
      text: ''
    };
  }
  handleTodoComplete = id => {
    this.props.toggleTodo(id);
  };

  handleTodoInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodoHandler = e => {
    const { text } = this.state;
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
    this.props.removeTodos();
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
           <ul>
          {todos.map(todo => {
            return (
              <li
                onClick={() => this.handleTodoComplete(todo.id)}
                key={todo.id}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
        <form>
          <input
            onChange={this.handleTodoInput}
            name="text"
            value={this.state.text}
          />
          <button type="button" onClick={this.addTodoHandler}>
            Add Todo
          </button>
        </form>
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
})(App);
import React from 'react';
import { ADD_TODO, TOGGLE_TODO, GET_TODOS } from '../actions';
import { connect } from 'react-redux';

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        };
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
          id: this.props.todos ? this.props.todos.length + text : 0 + text
        };
        this.props.addTodo(newTodo);
        this.setState({
          inputText: ''
        });
      };

      render() {
    const { todos } = this.props;
    return (
      <div>
        <form onSubmit={this.addTodoHandler}>
          <input
            onChange={this.handleTodoInput}
            name="text"
            value={this.state.text}
          />
          <button type="submit" >
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
                    ? { color: '#d3d3d3', textDecoration: 'line-through' }
                    : null
                }
                key={todo.id}
              >
                {todo.inputText}
              </li>
            );
          })}
        </ul>
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
  getTodos
})(TodoContainer);

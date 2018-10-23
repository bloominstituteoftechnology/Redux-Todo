import React from 'react';
import { addTodo, toggleTodo, getTodos } from '../actions';
import { connect } from 'react-redux';

class TodoContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        text: ''
      };
    }
  
    handleTodoComplete = todoId => {
      this.props.toggleTodo(todoId);
    };
  
    handleTodoInput = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    addTodoHandler = e => {
      e.preventDefault();
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
  
    render() {
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
            {this.props.todos.map(todo => {
              return (
                <ul
                  onClick={() => this.handleTodoComplete(todo.id)}
                  style={
                    todo.completed
                      ? { color: '#d3d3d3', textDecoration: 'line-through' }
                      : null
                  }
                  key={todo.id}
                >
                  {todo.text}
                </ul>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  // Hey Redux?! Whatever is state in the store, could throw it on Props inside
  // this react component?
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

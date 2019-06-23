import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodos, getTodos } from '../actions'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }


  handleTodoComplete = todoId => {
    this.props.toggleTodo(todoId);
  };

  removeTodos = () => {
    this.props.removeTodos();
  };

  render() {
    const { todos } = this.props;
    return (
      <div className='TodoList'>
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
        <button onClick={() => this.removeTodos()}>Clear</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};


export default connect(mapStateToProps, {
toggleTodo,
removeTodos,
getTodos
})(TodoList);
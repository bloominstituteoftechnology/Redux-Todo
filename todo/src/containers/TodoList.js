import React from 'react';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';

class TodoList extends React.Component {
  toggleHandler = (id) => {
    this.props.toggleTodo(id);
   };
  
  render() { 
    return (
      <div>
        <h1>Todos</h1>
        {
          this.props.todos.map(todo => (
            <p 
              onClick={() => this.toggleHandler(todo.id)}
              style={todo.completed ? {textDecoration: 'line-through'} : null }
            >
              {todo.value}
            </p>
          ))
        }
        <TodoForm />
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};
 
export default connect(mapStateToProps, {toggleTodo})(TodoList);
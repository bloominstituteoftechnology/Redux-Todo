import React from 'react';
import TodoForm from './TodoForm';
import { addTodo, toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  
  render() { 
    return (
      <div>
        <h1>Todos</h1>
        {
          this.props.todos.map(todo => <p>{todo.value}</p>)
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
 
export default connect(mapStateToProps)(TodoList);
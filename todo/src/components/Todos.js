import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

import TodoForm from './TodoForm';
import Todo from './Todo';

import './Todos.css';

class Todos extends React.Component {


  render() {
    return (
      <div>
        <h1>Redux Todos</h1>
        <TodoForm />
        {this.props.todos.map((todo, index) => (
          // <Todo key={index} todoText={todo} />
          <Todo key={index} todoText={todo} />
        ))}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted }
)(Todos);
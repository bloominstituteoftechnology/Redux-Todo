import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

import TodoForm from './TodoForm';
import Todo from './Todo';

import './Todos.css';


class Todos extends React.Component {

  handleClick = (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    toggleCompleted(ev.target.index);
  }

  render() {
    return (
      <div>
        <h1>Redux Todos</h1>
        <TodoForm />
        {this.props.todos.map((todoText, index) => (
          // <Todo key={index} todoText={todo} />
          <Todo key={index} todo={todoText} toggleCompleted={this.handleClick}/>
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
  { addTodo }
)(Todos);
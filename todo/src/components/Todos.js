import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

const style = { textDecoration: 'line-through'};

const Todos = props => {
  return (
    <div>
      {props.todos.map((todo, index)=> (
        <li 
          style={todo.completed ? style : null}
          onClick={() => props.completeTodo(index)}
          key={todo.id}
        >
          {todo.value}
        </li>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {completeTodo})(Todos);
import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, i) => 
        <Todo todo={todo} key={i} index={i} />
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps)(TodoList);
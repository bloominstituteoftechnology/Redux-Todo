import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = (props) => {

  return(
    <ul>
      {props.todos.map((task, index) => { return <Todo key={index} todo={task.value} completed={task.completed} id={task.id} />})}
    </ul>
  );

}
const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);


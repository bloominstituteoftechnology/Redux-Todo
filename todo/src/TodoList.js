import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = (props) => {
 console.log(props)
  return(
    <ul>
      {props.todos.map((task, index) => { return <Todo key ={index} todo ={task.value} toggleTodo = {props.toggleTodo} />})}
    </ul>
  );

}
const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);


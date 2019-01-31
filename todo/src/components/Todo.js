import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions/actions';

const Todo = (props) => {

  const deleteTodo = (name) => {
    props.deleteTodo(name)
  }

  return (
    <div>
      <h3> {props.todo.name}</h3>
      <button onClick={() => props.deleteTodo(props.todo.name)}> Delete Todo </button>
    </div>
  )
}
function mapStateToProps(){
  return {}
}
export default connect(mapStateToProps, {deleteTodo: deleteTodo})(Todo);

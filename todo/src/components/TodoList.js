import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = props => {
  console.log(props.todoProps)
  return (
  <div>
    {props.todoProps.map(todo => <Todo todo={todo} key={todo.id} toggle={props.toggle}/>)}
  </div>
  )
};

const mapStateToProps = state => ({ todoProps: state.todos });

export default connect(mapStateToProps, {})(TodoList);
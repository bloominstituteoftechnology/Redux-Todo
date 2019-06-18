import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = props => (
  <div className="todo-list-container">
    {props.todoProps.map(todo => <Todo todo={todo} key={todo.id} toggle={props.toggle} delete={props.delete}/>)}
  </div>
  );

const mapStateToProps = state => ({ todoProps: state.todos });

export default connect(mapStateToProps, {})(TodoList);
import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { updateToDoItem } from '../actions';

const ToDoList = ({ todos, updateToDoItem }) => (
  <ul>
   {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => updateToDoItem(todo.id)} />
    ))}
  </ul>
)
const mapDispatchToProps = dispatch => ({
  updateToDoItem: id => dispatch(updateToDoItem(id))
})

const mapStateToProps = state => ({
  todos:state
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)

import React from 'react';
import {connect} from 'react-redux';
import Todo from '../components/Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      {props.todos.map(item => {
        return (
          <Todo 
          key={item.id}
          id={item.id}
          value={item.value}
          onClick={props.complete} />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {todos: state.todos};
}

export default connect(mapStateToProps)(TodoList);

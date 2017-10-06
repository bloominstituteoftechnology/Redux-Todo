import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import {toggleTodo} from "../actions/Todos";

const TodoList = (props) => (
  <div>
    <ul>
      {props.todoList.map((todo,index) =><TodoItem {...todo} key={index} onClick={() => {
        console.log('at id', todo.id);
        props.dispatch(toggleTodo(todo.id))
      }}/>)}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    todoList: [...state.todoList]
  }
};

export default connect(mapStateToProps)(TodoList);


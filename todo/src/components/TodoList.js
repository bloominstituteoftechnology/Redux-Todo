import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from './actions';

import Todo from "./Todo";

const TodoList = props => {
  
  return(
    <div>
      {props.todos.map((todo, index) =>(<Todo toggleTodo={props.toggleTodo} key={index} todo={todo} />))}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  }

}
export default connect(mapStateToProps, {toggleTodo})(TodoList);
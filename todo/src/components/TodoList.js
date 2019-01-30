import React from 'react';
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = props => {
  
  return(
    <div>
      {props.todos.map(todo =>(<Todo key={todo} todo={todo} />))}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  }

}
export default connect(mapStateToProps, {})(TodoList);
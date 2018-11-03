import React from "react";
import { connect } from "react-redux";

import Todo from './Todo';

export const Todos = (props) => {
    return (
      <div>
        <ul>
          {props.todos.map(todo => {
           return <Todo key={todo.id} todo={todo}/>
            
          })}
        </ul>
      </div>
    );
  }

const mapStateToProps = state => {
  console.log(state)
  return  { todos: state};
  
};

export default connect(mapStateToProps)(Todos);

import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

function TodoList(props){
  return (
    <div>
        {props.todos.map((todo, index) => {
          return <Todo key={index} todo={todo}/>
        })}
    </div>
  )
}

function mapStateToProps(state){
  return {
    todos: state.todos
  };
}


export default connect(mapStateToProps)(TodoList);

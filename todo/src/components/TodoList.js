import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { deleteTodos } from '../actions/actions';

function TodoList(props){
  return (
    <div>
        <button onClick={() => props.deleteTodos()} > Delete Completed Todos </button>
        {props.todos.map((todo, index) => {
          return <Todo key={index} completed={todo.completed} todo={todo}/>
        })}

    </div>
  )
}

function mapStateToProps(state){
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {deleteTodos})(TodoList);

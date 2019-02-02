import React from "react";
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions/index'

const Todo = props => {

  const toggle = id => {
    let todoArray = props.todos.map(todo => { 
      if (id === todo.id) { 
        todo.completed = !todo.completed; 
        return todo;
      } else {
        return todo;
      }
    })
    props.toggleCompleted(todoArray)
  }

  return (
      <li style={props.todo.completed ? { textDecoration: 'line-through' } : null }
          // onClick={ () => props.toggleCompleted(props.todo.id) }>
          onClick={ () => toggle(props.todo.id) }>
        {props.todo.value}
      </li>
  ); 
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleCompleted })(Todo);

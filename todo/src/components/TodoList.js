import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodoAction } from '../actions/actions';

const TodoList = (props) => {
  return (
    
    <ul>
      {props.todos.map((todo) => {
        return (
          <Todo key={todo.id} 
            onClick={() => props.toggleTodoAction(todo.id)} 
            {...todo}
          />
        )
      })}
    </ul>
  )
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { toggleTodoAction })(TodoList);
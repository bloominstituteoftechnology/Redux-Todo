import React from 'react'
import { connect } from 'react-redux';  
import { completeToggle } from '/.actions';

const TodoList = props => {
  console.log(props.todos); 
  return (
    <div>
      {props.todos.map(todo => (
        <div 
          style={todo.completed ? { textDecoration: 'line-through' } : null}
          onClick={() => props.completeToggle(todo.id)}
          key={todo.id}
        >
          {todo.task}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state 
  };   
}; 

export default connect (mapStateToProps, { completeToggle })(TodoList);  
import React from 'react';
import { connect } from 'react-redux';
import { toggle_todo } from '../actions/toggle_todo';
import { delete_todo } from '../actions/delete_todo';
// import Item from './Item';

const ToDoList = (props) => {
  console.log('props:', props);
  console.log('todo:', props.todo)
  console.log('local storage:', localStorage.getItem("storedArray"));

  return(
    <ul>
      {props.todo.map(item =>
        <li key={item.id}
          onClick={() => props.toggle_todo(item.id)}
          style={ item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }
        >
          {item.value}
          <button onClick={() => props.delete_todo(item.id)}>Delete</button>
        </li>
      )}
    </ul>
  )
}


const mapStateToProps = (state) => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps,{ toggle_todo, delete_todo })(ToDoList);
import React from 'react';
import { connect } from 'react-redux';
import { toggle_todo } from '../actions/toggle_todo';
// import Item from './Item';

const ToDoList = (props) => {
  console.log(props);

  return(
    <ul>
      {props.todo.map(item =>
        <li key={item.id} onClick={() => props.toggle_todo(item.id)}>
          {item.value}
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

export default connect(mapStateToProps,{ toggle_todo })(ToDoList);
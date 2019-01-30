import React from 'react';
import { connect } from 'react-redux';

const ToDoList = props => {
  return(
    <div>
      {props.todos.map(item => {
        return <h2>{item.text}</h2>
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, {})(ToDoList);

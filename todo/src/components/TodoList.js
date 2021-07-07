import React, {Component} from 'react';
import {connect} from 'react-redux';

const TodoList = props => {
  return (
    <h3>{props.todoName}</h3>);
}

const mapStateToProps = (state) => {
  console.log('test',state)
  return {todoName: state.name }
}

export default connect(mapStateToProps)(TodoList);

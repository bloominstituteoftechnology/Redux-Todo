import React from 'react';
import { connect } from 'react-redux';
import { toggle_completed, delete_item } from '../actions'
import Task from './Task'

const TaskList = props => {
  return (
    <div className='todo-list'>
      <ul>
      {props.todos.map(item =>
        <Task item={item} />
      )}
    </ul>
    </div>
  )}

  const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {toggle_completed, delete_item})(TaskList)

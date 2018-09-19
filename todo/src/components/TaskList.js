import React from 'react';
import { connect } from 'react-redux';
import { toggle_completed, delete_item } from '../actions'
import Task from './Task'

const TaskList = props => {
  if (props.filter === 'all') {
    console.log('here');
  return (
    <div className='todo-list'>
      <ul>
      {props.todos.map(item =>
        <Task item={item} key={item.id} />
      )}
    </ul>
    </div>
  )} else {
    console.log('there');
    return (
      <div className='todo-list'>
        <ul>
          {props.todos.filter(item => item.completed === props.filter)
          .map(item =>
            <Task item={item} key={item.id} />
          )}
      </ul>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {toggle_completed, delete_item})(TaskList)

import React from 'react';
import { connect } from 'react-redux';
import { toggle_completed } from '../actions'

const TaskList = props => {
  return (
    <div className='todo-list'>
      <ul>
        todo list goes here
      {props.todos.map(item =>
        <li onClick={ e => {
          e.preventDefault()
          props.toggle_completed(item.id)
          }}
          key={item.id}
          style={{textDecoration: item.completed ? 'line-through' : 'none'}}
        >
          {item.value}
        </li>
      )}
      </ul>
    </div>
  )}

  const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {toggle_completed})(TaskList)

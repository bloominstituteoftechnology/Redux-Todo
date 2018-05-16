import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'reactstrap';

import { toggleTask, deleteTask } from '../../actions';

import './Task.css';

const Task = props => {
  return (
    <ListGroupItem 
      className={(props.task.completed) ? 'complete' : 'incomplete'}
      data-id={`${props.task.id}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <i className="fas fa-check-circle"></i>
      {props.task.value}
      <button className="delete" onClick={() => props.deleteTask(props.task.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </ListGroupItem>
  )
}
 
export default connect(null, { toggleTask, deleteTask })(Task);
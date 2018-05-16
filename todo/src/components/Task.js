import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import { toggleTask } from '../actions';

const Task = props => {
  return (
    <ListGroupItem
      className={(props.task.completed) ? 'complete' : 'incomplete'}
      data-id={`${props.task.id}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      {props.task.value}
    </ListGroupItem>
  )
}
 
export default connect(null, { toggleTask })(Task);
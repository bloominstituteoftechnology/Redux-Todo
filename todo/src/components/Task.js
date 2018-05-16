import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Task = props => {
  return (
    <ListGroupItem className={(props.task.completed) ? 'complete' : 'incomplete'} data-id={props.task.id}>{props.task.value}</ListGroupItem>
  )
}
 
export default Task;
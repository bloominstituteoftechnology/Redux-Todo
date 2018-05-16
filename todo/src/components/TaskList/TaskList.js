import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap'
import Task from '../Task/Task';

const TaskList = props => {
  return (
    <div>
      <ListGroup className='task-list'>
        {props.tasks.map(task => <Task key={task.id} task={task} />)}
      </ListGroup>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}
 
export default connect(mapStateToProps, {})(TaskList);
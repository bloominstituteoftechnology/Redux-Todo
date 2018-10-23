import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete, deleteTask } from '../../actions';

import Task from './Task';

class Tasks extends Component {
  handleClick = (e, id) => {
    e.preventDefault();
    if (e.target.classList.contains('fa-times')) {
      console.log('deleted');
      this.props.deleteTask(id);
    } else {
      this.props.toggleComplete(id);
    }
  };

  render() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.map(task => (
          <Task task={task} key={task.id} handleClick={this.handleClick} />
        ))}
      </div>
    );
  }
}

const mapPropToState = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(
  mapPropToState,
  { toggleComplete, deleteTask }
)(Tasks);

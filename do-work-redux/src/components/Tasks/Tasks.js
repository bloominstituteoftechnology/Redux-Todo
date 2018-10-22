import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task';

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <React.Fragment>
        {tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </React.Fragment>
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
  {}
)(Tasks);

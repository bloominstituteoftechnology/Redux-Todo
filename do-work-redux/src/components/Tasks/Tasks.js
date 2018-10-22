import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../../actions';

import Task from './Task';

class Tasks extends Component {
  handleClick = (e, id) => {
    e.preventDefault();
    this.props.toggleComplete(id);
  };

  render() {
    const { tasks } = this.props;
    return (
      <React.Fragment>
        {tasks.map(task => (
          <Task task={task} key={task.id} handleClick={this.handleClick} />
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
  { toggleComplete }
)(Tasks);

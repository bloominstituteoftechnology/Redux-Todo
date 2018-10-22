import React, { Component } from 'react';

import styled from 'styled-components';

const StyledTask = styled.div`
  cursor: pointer;

  .complete {
    color: #ff4757;
  }
`;

class Task extends Component {
  render() {
    const { task, id, completed } = this.props.task;
    const { handleClick } = this.props;
    return (
      <StyledTask id={id} onClick={e => handleClick(e, id)}>
        <i className={completed ? 'fas fa-circle complete' : 'far fa-circle'} />{' '}
        {task}
      </StyledTask>
    );
  }
}

export default Task;

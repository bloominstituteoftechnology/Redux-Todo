import React, { Component } from 'react';

import styled from 'styled-components';

const StyledTask = styled.div`
  cursor: pointer;
  border-bottom: 3px solid #f1f2f6;
  padding: 1rem 1rem 1rem 0;
  margin: 1rem 0;
  display: flex;
  align-items: center;

  .complete {
    color: #ff4757;
  }

  .fa-circle {
    margin-right: 1.5rem;
  }

  .fa-times {
    margin-left: auto;
    color: #fc747f;

    &:hover {
      color: #ff4757;
    }
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
        <i className="fas fa-times" />
      </StyledTask>
    );
  }
}

export default Task;

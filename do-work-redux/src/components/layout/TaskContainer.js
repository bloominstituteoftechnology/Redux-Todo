import React, { Component } from 'react';
import styled from 'styled-components';

import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';

const StyledTaskContainer = styled.div`
  width: 80%;
`;

class TaskContainer extends Component {
  render() {
    return (
      <StyledTaskContainer>
        <Form />
        <Tasks />
      </StyledTaskContainer>
    );
  }
}

export default TaskContainer;

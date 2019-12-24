import React, { Component } from 'react';
import styled from 'styled-components';

import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';

const StyledTaskContainer = styled.div`
  background: #dfe4ea;
  width: 75%;
  margin-left: 25%;
  padding: 3rem 10rem;
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

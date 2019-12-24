import React from 'react';
import styled from 'styled-components';

const StyledFormMessage = styled.div`
  margin: 2rem 0 1rem;
  padding: 1rem;
  background: #fc747f;
  color: #fafafa;
  border-radius: 5px;
  color: white;
  border: 5px solid #ff4757;
  font-size: 2rem;
  width: 100%;
  /* display: none; */

  i {
    margin-right: 1rem;
  }
`;

const FormMessage = props => {
  return (
    <StyledFormMessage>
      {/* <i className="fas fa-hand-paper" /> */}
      <i className="fas fa-exclamation-triangle" />
      Enter a task, s'il vous plaît!
    </StyledFormMessage>
  );
};

export default FormMessage;

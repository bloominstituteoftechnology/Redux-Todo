import styled from 'styled-components';

export const StyledForm = styled.form`
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  /* width: 95%; */
  background: rgb(100, 115, 125);
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  outline: 0 none;
  margin-bottom: 20px;
  ::placeholder {
    color: rgb(200, 200, 200);
  }
  `;

export const StyledButton = styled.button`
  width: 200px;
  min-height: 38px;
  background: rgb(95, 179, 179);
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  outline: 0 none;
`;

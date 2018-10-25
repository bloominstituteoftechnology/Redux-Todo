import styled from 'styled-components';

export const StyledForm = styled.form`
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 600px;
`;

export const StyledInput = styled.input`
  /* flex-grow: 1; */
  box-sizing: border-box;
  width: 100%;
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
  :hover {
    cursor: pointer;
  }
`;

export const ClearButton = styled(StyledButton)`
  background: rgb(149, 199, 153);
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  background: rgb(41, 41, 41);
  width: 100vw;
  max-width: 600px;
  height: 90vh;
  min-height: 300px;
  padding: 20px 20px;
  margin: 5vh auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0px;
  @media (max-width: 610px) {
    height: 100vh
    margin: 0;
    border-radius: 0;
  }
`;

export const StyledHeader = styled.h1`
  flex-shrink: 0;
  font-size: 4rem;
  color: rgb(167, 173, 185);
  margin: 0;
`;
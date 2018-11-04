import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 715px;
  margin: 20px auto;
  border-radius: 5px;
  padding-bottom: 50px;
  background-color:#008CBA;
  box-shadow: #fefbd8;
`;

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
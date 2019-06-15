import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 600px;
  margin: 50px auto;
  border-radius: 5px;
  padding-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;

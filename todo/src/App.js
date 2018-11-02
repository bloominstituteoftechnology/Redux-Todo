import React from 'react';
import styled from 'styled-components';

import AddTodo from './containers/AddTodo';
import Todos from './containers/Todos';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 880px;
  width: 100%;
  margin: 0 auto;

  h1{
    font-size: 3.2rem;
    margin: 20px 0;
  }
`;

const App = (props)=>{
  return (
    <AppContainer>
      <h1>Todo List:</h1>
      <AddTodo/>
      <Todos/>
    </AppContainer>
  );
}

export default App;

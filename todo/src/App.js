
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import styled from 'styled-components'



const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
`

const App = props => {
  return (
    <Container>
       <TodoList />
       <TodoInput />
    </Container>
  );
}

export default App;
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  width:986px;
  display:flex;
  flex-flow:row;
  justify-content:space-between;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AddTodo />
        <TodoList />
      </AppContainer>
    );
  }
}

export default App;

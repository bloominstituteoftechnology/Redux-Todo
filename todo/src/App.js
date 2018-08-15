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
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;

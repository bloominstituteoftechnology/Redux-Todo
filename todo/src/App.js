import React, { Component } from 'react';
import { AppBox, Header, SubHeading } from './components/StyledComponents';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

class App extends Component {
  render() {
    return (
      <AppBox>
        <Header>Welcome to Your To Do List App</Header>
        <SubHeading>Add new to do items. <br></br> Click on them to cross it off your list or simply delete.</SubHeading>
        <ToDoForm />
        <ToDoList />
      </AppBox>
    );
  }
}

export default App;

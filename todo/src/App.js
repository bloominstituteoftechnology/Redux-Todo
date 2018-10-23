import React, { Component } from 'react';
import styled from 'styled-components';

import './index.css'

import AddToDo from './Components/AddToDo';
import ToDoList from './Components/ToDoList';


const WrapperDiv = styled.div`
  margin:0 auto;
  border: 1px solid black;
  max-width:1000px; 
  min-height:500px; 
  display:flex;
  flex-direction:column;
`

class App extends Component {
  render() {
    return (
      <WrapperDiv>
        <AddToDo></AddToDo>
        <ToDoList></ToDoList>
      </WrapperDiv>
    );
  }
}

export default App;

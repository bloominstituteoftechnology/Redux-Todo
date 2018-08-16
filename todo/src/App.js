import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo';
import styled from 'styled-components';
import { addTodo, toggleTodo } from './actions/index.js';
import './App.css';

const AppContainer = styled.div`
  width:986px;
  display:flex;
  flex-flow:row;
  justify-content:space-between;
  margin: 0 auto;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: '',
    }
    console.log(props.todos);
    
  }

  handleAddTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <AppContainer>
        <AddTodo handleAddTodo={ this.handleAddTodo }/>
        <TodoList todos={ this.props.todos }/>
      </AppContainer>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, {
  addTodo, toggleTodo
})(App);

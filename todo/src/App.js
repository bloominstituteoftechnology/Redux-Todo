import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { connect } from "react-redux";
import { getTodos, addTodo, removeTodos, toggleCompleted } from './todoActions';

const StyledLI = styled.li`
    text-decoration: ${props => (props.completed ? "none" : "line-through")}
`;

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTodos();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My god, you've got SO MUCH TO DO!!</h1>
        </header>
        <ul>
          {this.props.todos.map(todo => {
            <StyledLI onClick={this.props.toggleCompleted} 
                completed={todo.completed ? true : false}>{todo.todo}</StyledLI>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { getTodos, addTodo, removeTodos, toggleCompleted })(App);

import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo, toggleCompletion } from './actions'
import styled from 'styled-components'

const Li = styled.li`
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none' };
`

class App extends Component {

  buttonOnClickHandler = (e) => {
    //Call the action creator ADD_TODO
    this.props.addTodo(this.input.value)

    //Clear out the field
    this.input.value = ''
  }

  todoItemClickHandler = (id) => {
    console.log('You clicked on an item')
    console.log(id)
    this.props.toggleCompletion(id)
  }
  
  render() {
    return (
      <div className="App">
      React Todo App
      < br/>
      <input ref={node => {this.input = node }}/>
      <button onClick={this.buttonOnClickHandler}>Add Todo</button>
      <ul>
        {(this.props.todos) ? this.props.todos.map( todo => <Li isCompleted={todo.completed} onClick={()=>this.todoItemClickHandler(todo.id)} key={Math.random()}>{todo.value}</Li>):null}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state.todos
  };
};

//Connect (or wire up the actions to the store/reducer. This also allows you 
// to have the actions as props
export default connect(mapStateToProps, {addTodo, toggleCompletion})(App);

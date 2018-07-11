import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo, toggleCompletion, removeTodoItem } from './actions'
import styled from 'styled-components'

const P = styled.p`
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none' };
`

class App extends Component {

  buttonOnClickHandler = (e) => {
    //Call the action creator ADD_TODO
    this.props.addTodo(this.input.value)

    //Clear out the field
    this.input.value = ''
  }
 
  render() {
    return (
      <div className="App">
      React Todo App
      < br/>
      <input ref={node => {this.input = node }}/>
      <button onClick={this.buttonOnClickHandler}>Add Todo</button>
      <div>
        {
          (this.props.todos) ? 
            this.props.todos.map( todo => 
                <P isCompleted={todo.completed} onClick={()=>this.props.toggleCompletion(todo.id)} key={Math.random()}>{todo.value}<button onClick={()=>this.props.removeTodoItem(todo.id)}>Remove</button></P>)
          :null
        }
      </div>
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
export default connect(mapStateToProps, {addTodo, toggleCompletion, removeTodoItem})(App);

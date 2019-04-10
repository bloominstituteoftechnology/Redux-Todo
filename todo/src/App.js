import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo, toggleCompletion, removeTodoItem } from './actions'
import styled from 'styled-components'

const TodoSpan = styled.span`
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none' };
`
const Xbutton = styled.span`
  border: 1px solid grey
  &:hover {
    font-weight:bold;
  }
`

const TodoDiv = styled.div`
  margin: 5px 0;
  height: 30px;

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
              <TodoDiv key={Math.random()}> 
                <TodoSpan isCompleted={todo.completed} onClick={()=>this.props.toggleCompletion(todo.id)} >{todo.value}</TodoSpan> <Xbutton onClick={()=>this.props.removeTodoItem(todo.id)}> &#10006;</Xbutton>
                </TodoDiv>)
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

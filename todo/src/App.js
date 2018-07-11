import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo } from './actions'

class App extends Component {

  buttonOnClickHandler = () => {
    //Call the action creator ADD_TODO
    this.props.addTodo(this.input.value)

    //Clear out the field
    this.input.value = ''
  }

  todoItemClickHandler = () => {

  }
  
  render() {
    return (
      <div className="App">
      React Todo App
      < br/>
      <input ref={node => {this.input = node }}/>
      <button onClick={this.buttonOnClickHandler}>Add Todo</button>
      <ul>
        {(this.props.todos) ? this.props.todos.map( todo => <li key={Math.random()}>{todo.value}</li>):null}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state in MSP', state)
  return {
      todos: state.todos
  };
};

//Connect (or wire up the actions to the store/reducer. This also allows you 
// to have the actions as props
export default connect(mapStateToProps, {addTodo})(App);

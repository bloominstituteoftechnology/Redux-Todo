import React, { Component } from 'react'; 
import './App.css';
import {connect} from 'react-redux';
import TodoForm from './Components/TodoForm'

// The general flow of steps will be to create your store,
// create your reducers, create your containers, and then 
// create the action creators.

// When you add a new item to the todo array an action 
// containing the new todo object will be dispatched 
// through all of the reducers.


// Your application should have an input field, a submit button,
// and a list of items that represents your todo list.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  // addTodo = (e) => {
  //   const todosCopy = this.state.todos.slice();

  // }

  render() {
    return (
      <div>
        TODOS

        <TodoForm 

        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State in Redux Store: ", state);
  return {
    todos: "neep"
  }
}

export default connect(mapStateToProps)(App);

//When users interact with our React components, we call our 
//action creator functions that are wired up through connect. 
//Because we give our connect function the object of action 
//creators, connect knows how to use dispatch to identify 
//these events as actions.

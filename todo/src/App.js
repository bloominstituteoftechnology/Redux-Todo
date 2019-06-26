import React, { Component } from 'react'; 
import './App.css';
import {connect} from 'react-redux';
import TodoForm from './components/TodoForm';
import {addTodo} from './actions/index';

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
  }

  render() {
    return (
      <div>
        <TodoForm
          addTodo = {this.props.addTodo} 
        />

        TODOS
        {this.props.todos.map(todo => {
          return (
            <div key = {todo.value}>
              -{todo.value}
            </div>
          )
        })}
      </div>
    );
  }
}

// mapStateToProps takes whats in our REDUX store, 
// and passes it to our component as props.
const mapStateToProps = state => {
  console.log("State in Redux Store: ", state);
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(App);

//When users interact with our React components, we call our 
//action creator functions that are wired up through connect. 
//Because we give our connect function the object of action 
//creators, connect knows how to use dispatch to identify 
//these events as actions.

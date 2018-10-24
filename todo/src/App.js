import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo.js'
import ToDoList from './containers/ToDoList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AddTodo/>
      <ToDoList/>
      </div>
    );
  }
}


​ ​const mapStateToProps = state => ({
  todos: {todoArray}
})
​
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
​
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './components/TodoItem/TodoItem';
import TodoInput from './components/TodoInput/TodoInput';
import './App.css';

class App extends Component {
  
  render() {
    const todos = (this.props.todos.length === 0) ? JSON.parse(window.localStorage.getItem("todos")) : this.props.todos;
    return (      
      <div className="Todo">
        <TodoInput />
        {
          todos.map((item, index) => (
            <TodoItem key={ index } index={ index } todo={ item } />
          ))
        }
      </div>
    );

  }

}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(App);
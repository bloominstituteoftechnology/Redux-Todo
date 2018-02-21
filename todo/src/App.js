import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import Todos from './Todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="TodoList">
        <h2>My Todo List</h2>
        {
          this.props.todos.map((todo) => {
            <Todos todo={todo}/>
          })
        }
        <form onSubmit={() => {
          this.props.addTodo(event.target.value)
        }}>
          <input type='submit' value='Add a new task' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: [state]
  }
}

export default connect(mapStateToProps, {})(App);

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class App extends Component {
  state = {
    todoInput: ''
  }

  handleTodoInput = e => {
    this.setState({ [e.target.name]: e.target.value })
}

  render() {
    // console.log('todos', this.props.todos)
    return (
      <div className="App">
        <input 
          placeholder="Enter Task" 
          type="text" 
          value={this.state.todoInput} 
          onChange={this.handleTodoInput} 
          name="todoInput" 
        />
        <button onClick={() => this.props.addTask(this.state.todoInput)} >Add Task</button>

        {/* list will go here . && means if firstClause(line 31) is true then execute secondClause(line 33)*/}
        {this.props.todos.length > 0 
        && 
        this.props.todos.map(item => 
          <div key={item.thingTodo}>{item.thingTodo}</div>
        )
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps, { addTask })(App);
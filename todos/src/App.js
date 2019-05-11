import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { todos, getTodos, submitTodo, toggleTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formText: ""
    }
  }

  componentDidMount() {
    console.log(this);
    this.props.getTodos();
  }

  logTodos() {
    console.log(this.props.todos);
  }

  handleTodoText = e => {
    this.setState({
      formText: e.target.value
    });
  }

  render() {
    return (
      <div className="ToDoList">
      <input onChange={e => this.handleTodoText(e)} value={this.state.formText} type="text" placeholder='Add your To Dos here!' />
      <button onClick={() => this.props.submitTodo(this.state.formText)}>Submit</button>
        <ul>

        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state,
  };
};

const mapDispatchToProps = () => {
  return {
    getTodos,
    submitTodo,
    toggleTodo
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);

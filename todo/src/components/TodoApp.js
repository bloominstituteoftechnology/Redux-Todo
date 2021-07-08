import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux';
import { add_todo, toggle_completed } from '../actions'
import SubmitForm from './SubmitForm'
import TaskList from './TaskList'

class TodoApp extends Component {

  state = {
    todo: '',
    filter: 'all'
  }

  inputChange = event => {
    this.setState({todo: event.target.value})
  }

  reset = () => this.setState({todo:''})

  setFilter = (value) => {
    this.setState({filter: value})
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your Day's Tasks</h1>
        </header>
        <SubmitForm
          value={this.state.todo}
          inputChange={this.inputChange}
          reset={this.reset}
          setFilter={this.setFilter}
          filter={this.state.filter}
        />
        <TaskList
          filter={this.state.filter}
          todos={this.props.todos}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, {add_todo, toggle_completed})(TodoApp);

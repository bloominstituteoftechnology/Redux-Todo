import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addToDo } from './components/actions';
import ToDoList from './components/todolist';
import ToDoForm from './components/toDoForm';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: '',
    }
  }

  componentDidMount() {
    this.setState({todos: this.state.todos});
  }

  addToDo = () => {
    return false;
  }

  render() {
    return (
      <div className="APP">
        <header className="APP_HEADER">
          <h1 className="APP_TITLE">TO DO LIST</h1>
        </header>
        <div className="TODO">
          <ToDoList />
          <ToDoForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state,
  }
}

export default connect(mapStateToProps, { addToDo, ToDoList })(App);

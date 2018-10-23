import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addToList, changeCompletedAction, deleteTask } from './actions';
import AddToDo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  changeHandler = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  addToListAction= (ev) => {
    ev.preventDefault();
    this.props.addToList(this.state.inputText);
  }

  changeCompleted = (id) => {
    this.props.changeCompletedAction(id);
  }

  render() {
    return (
      <div className="App">
        <TodoList 
          todo={this.props.todo} 
          changeCompleted={this.changeCompleted}
        />
        <AddToDo
          changeHandler={this.changeHandler} 
          inputValue={this.state.inputText}
          addToList={this.addToListAction}
        />
        <button onClick={this.props.deleteTask}>DELETE</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todo: state.todo
  };
};

export default connect(mapStateToProps, { addToList, changeCompletedAction, deleteTask })(App);

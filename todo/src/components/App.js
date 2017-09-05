import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { add, toggle, remove } from '../actions'
import { bindActionCreators } from 'redux';
import AddToDo from './AddToDo';
import List from './List';
import { saveState } from '../localStorage';

class App extends Component {
  componentDidUpdate() {
    saveState(this.props.todos);
  }
  handleOnSubmit(e) {
    e.preventDefault();
    this.props.add(e.target.input.value);
    e.target.input.value = '';
  }
  handleOnClick(e) {
    this.props.toggle(e.target.id);
  }
  handleClickX(e) {
    this.props.remove(e.target.id);
  }
  render() {
  return (
    <div className="main-container">
      <h1>Your To Do List</h1>
      <AddToDo handleOnSubmit={this.handleOnSubmit.bind(this)} />
      <ol className="whole-list">
        {this.props.todos.map((todo, i) => {
          return <List 
            completed={todo.completed}
            key={i} 
            todo={todo.text} 
            id={todo.id} 
            handleOnClick={this.handleOnClick.bind(this)}
            handleClickX={this.handleClickX.bind(this)} />
        })}
      </ol>
    </div>
  )
  }
}

const mapStateToProps =(todos) => {
  return {
    todos,
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add,
    toggle,
    remove,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

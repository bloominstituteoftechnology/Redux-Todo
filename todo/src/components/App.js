import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { add, toggle, remove } from '../actions'
import { bindActionCreators } from 'redux';
import AddToDo from './AddToDo';
import List from './List';

class App extends Component {
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

const mapStateToProps =(state) => {
  return {
    todos: state.todos,
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

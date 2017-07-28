import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.todo = '';
  }
  handleChange(event) {
    this.todo = event.target.value;
  }
  handleSubmit(event) {
    event.preventDefault();
    addTodo(this.todo);
  }

  render() {
    return (
      <div>
        <form onSubmit ={this.handleSubmit()}>
        <input onChange={this.handleChange} type = 'text' placeholder="Enter a todo" ref="NewTodo"></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  todos = state.todosReducer;
}
const mapDispatchToProps = (state) => {
  return bindActionCreators(
    {},
    dispatch
  );
}


export default connect(mapStateToProps, {todosReducer})(TodoInput);
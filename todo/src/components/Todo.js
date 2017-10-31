import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions/actions';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoTask: '',
      todos: []
    };
  }
  render() {
    return (
      <p>
        Add Todo:
        <input type="text" name= "addTodo"/>
        Submit:
        <input type="submit" value= "Submit" onClick={() => this.props.addTodo() }/>
        List:
        {this.state.todos}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todo: state
  };
};

export default connect(mapStateToProps, {addTodo, toggleCompleted})(Todo);
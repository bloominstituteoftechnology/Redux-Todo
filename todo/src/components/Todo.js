import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions/actions';

class Todo extends Component {
  render() {
    return (
      <div>
        return the todo item
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todo: state
  };
};

export default connect(mapStateToProps, {addTodo, toggleCompleted})(Todo);
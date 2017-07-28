import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodosDetail extends Component {
  render() {
    if (!this.props.todos) {
      return (
        <h4>Add a Todo List Item</h4>
      );
    }

    return (
      <div>
        <h1>{this.props.todos.value}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.selectedTodos
  };
};

export default connect(mapStateToProps)(TodosDetail);

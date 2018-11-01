import React, { Component } from "react";
import { connect } from 'react-redux';

class TodoList extends Component {

  render () {
    return (
      <div>Todo List</div>
    );
  }
};

// mapStateToProps so that we have the information needed from the Store
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(TodoList);
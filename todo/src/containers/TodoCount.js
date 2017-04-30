import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoCount extends Component {
  getTotalCount() {
    return this.props.todos.length;
  }

  getIncompleteCount() {
    return this.props.todos.filter(todo => !todo.completed).length;
  }

  render() {
    return (
      <div className="TodoCount">
        { this.getIncompleteCount() } out of { this.getTotalCount() } tasks left.
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });
export default connect(mapStateToProps)(TodoCount);
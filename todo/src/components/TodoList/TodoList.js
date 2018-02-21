import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            <li>{todo}</li>
          })}
        </ul>
        <input />
        <button>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: [state],
  };
};

export default connect(mapStateToProps)(TodoList);

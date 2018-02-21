import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoForm extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            <li>{this.todo}</li>
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

export default connect(mapStateToProps)(TodoForm);

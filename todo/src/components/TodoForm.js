import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from '../actions';

export default class TodoForm extends Component {
  render() {
    return (
      <form>
        <input type="Text" />
        {/* Fill in the button function once you're ready to add a todo. */}
        <input type="Button" value="Add Todo" name="add-todo" onClick={null} />
        {/* Fill in the button function once you're ready to delete the selected todos. */}
        <input
          type="Button"
          value="Delete Todo"
          name="delete-todo"
          onClick={null}
        />
      </form>
    );
  }
}

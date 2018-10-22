import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

import '../App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form>
          <input />
          <button>Add</button>
        </form>
        <ul />
      </div>
    );
  }
}

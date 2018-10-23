import React, { Component } from 'react';

import { ReactComponent as TrashCan } from '../assets/svgs/trash-2.svg';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ input: '' });
  };

  handleChange = e => this.setState({ input: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="...todo"
          value={this.state.input}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Todo</button>
        <div>
          <TrashCan />
        </div>
      </form>
    );
  }
}

export default TodoForm;

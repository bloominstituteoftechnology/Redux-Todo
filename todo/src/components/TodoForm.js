import React from 'react';
import { connect } from 'react-redux';

import { add } from '../actions';

class TodoForm extends React.Component {
  state = {
    newTodo: {
      text: '',
      id: 1,
      completed: false
    },
  };

  handleChange = event => {
    const newTodoCopy = this.state.newTodo;
    newTodoCopy.text = event.target.value;
    this.setState(newTodoCopy);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo.text}
          type="text"
        />
        <button
          onClick={() => {
            this.props.add(this.state.newTodo);
            const newID = this.state.newTodo.id + 1;
            this.setState({
              newTodo: {
                text: '',
                id: newID,
                completed: false
              },
            });
          }}>
          Add Todo
          </button>
      </div>
    );
  }
}

export default connect(null, { add })(TodoForm);

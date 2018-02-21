import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, toggleToDo } from '../actions';

class AddToDo extends Component {
  state = {
    id: 3,
    text: '',
    completed: false,
  };

  updateState = event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <form
        onSubmit={() => {
          this.props.addToDo(this.state);
        }}
      >
        <input
          type="text"
          placeholder="Enter To Do"
          value={this.state.text}
          onChange={this.updateState}
        />
        <button type="submit">^</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state,
  };
};

export default connect(mapStateToProps, { addToDo, toggleToDo })(AddToDo);

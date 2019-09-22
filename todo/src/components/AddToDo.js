import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, toggleToDo, deleteToDo } from '../actions';
import './ItemList.css';

class AddToDo extends Component {
  state = {
    id: 0,
    text: '',
    completed: false,
  };

  updateState = event => {
    this.setState({
      text: event.target.value,
    });
  };

  sendToReducer = event => {
    event.preventDefault();
    let newId = this.state.id;
    this.props.addToDo(this.state);
    this.setState({ text: '', id: ++newId });
  };

  render() {
    return (
      <div className="addToDo">
        <form onSubmit={this.sendToReducer}>
          <input
            className="submitField"
            type="text"
            placeholder="Enter To Do"
            value={this.state.text}
            onChange={this.updateState}
          />
          <button className="submitButton" type="submit">
            >
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state,
  };
};

export default connect(mapStateToProps, { addToDo, toggleToDo, deleteToDo })(
  AddToDo
);

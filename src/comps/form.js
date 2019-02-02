import React from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../actions/actions.js';
import {saveToDos} from '../actions/actions.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.local = window.localStorage;
    this.state = {
      input: '',
      date: '',
    };
  }

  saveLocal = () => {
    this.props.saveToDos();
  };

  captureInput = e => {
    if (e.target.id === 'todo') {
      this.setState({input: e.target.value});
    }
    if (e.target.id === 'date') {
      this.setState({date: e.target.value});
    }
  };

  eventHandler = e => {
    e.preventDefault();
    this.props.addToDo(this.state.input, this.state.date);
    this.setState({input: '', date: ''});
  };

  render() {
    return (
      <div className="formCont" onSubmit={this.eventHandler}>
        <form className="form">
          <div className="inpCont">
            <label className="todoform" htmlFor="inpTodo">
              Todo:
            </label>
            <input
              className="todoform"
              type="text"
              onChange={this.captureInput}
              id="todo"
              value={this.state.input}
            />
          </div>
          <div className="dateCont">
            <label className="tod" htmlFor="dateTodo">
              Due Date:
            </label>
            <input
              className="to"
              type="date"
              onChange={this.captureInput}
              id="date"
              value={this.state.date}
            />
          </div>
          <button className="add">Add Todo</button>
        </form>
        <button className="save" onClick={this.saveLocal}>
          Save
        </button>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {};
};

export default connect(
  mapPropsToState,
  {addToDo, saveToDos},
)(Form);

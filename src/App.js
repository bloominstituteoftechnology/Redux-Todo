import React, {Component} from 'react';
import './App.scss';
import ToDoList from './comps/toDoList.js';
import Form from './comps/form.js';
import {connect} from 'react-redux';
import {deleteCompleted} from './actions/actions.js';

class App extends Component {
  render() {
    return (
      <div className="cont">
        <div className="App">
          <Form />
          <button className="delete" onClick={this.props.deleteCompleted}>
            Delete Completed
          </button>
          <ToDoList />
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {};
};

export default connect(
  mapPropsToState,
  {deleteCompleted},
)(App);

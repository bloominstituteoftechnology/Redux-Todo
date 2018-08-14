import React, { Component } from 'react';
import './Todo.css';
import { connect } from 'react-redux';
import { add, complete } from './actions';
import AddToDo from './AddToDo';
import List from './List';

class Todo extends Component {

  render() {
    return (
      <div className="App">
        <h1>Things I got Ta Do</h1>
        <List complete={this.props.complete} list={this.props.list} />
      <AddToDo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      list: state
  };
  };

export default connect(mapStateToProps, { add, complete })(Todo);

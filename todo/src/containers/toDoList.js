import React, { Component } from 'react';
import { addToDo } from '../actions';
import { connect } from 'react-redux';

class ToDoList extends Component {

  renderToDos() {
    return this.props.todos.map((toDo, i) => {
      return (
        <li>
          {toDo.value}
          <button>Completed</button>
        </li>
      )
    });
  }

  render() {
    return (
      <ul>
        {this.renderToDos()}
      </ul>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};



export default connect(mapStateToProps, { addToDo })(ToDoList);

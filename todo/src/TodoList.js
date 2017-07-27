import React, { Component } from 'react';
import { connect } from 'react-redux';
import ul from './TodoList.css';
// import { addTodoItem } from './actions';

class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.listItems.map((item, i) => {
          return (
            <li key={i}>
              {item.todoText}
            </li>
          )
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems
  };
}

export default connect(mapStateToProps)(TodoList);

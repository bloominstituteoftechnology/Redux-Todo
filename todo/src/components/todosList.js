import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {

  // handleDelete() {
  //   return this.props.removeTodo();
  // }

  render() {
    return (
      <div>
      <ul>
        {this.props.todos.map(todo => {
          return <li>{todo}</li>
        })}
        {/* <button onclick={this.props.handleDelete()}>Delete</button> */}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}


export default connect(mapStateToProps)(TodoList);
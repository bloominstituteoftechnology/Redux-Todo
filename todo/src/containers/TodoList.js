import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../containers';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    if (!todos.length) return <h3>Nothing to do, yet.</h3>;

    return (
      <ul className="TodoList">
        { todos.map((todo, index) => <TodoItem key={index} id={index} todo={todo} />) }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
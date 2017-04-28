import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../containers';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    if (!todos.length) return <h3>No todos yet.</h3>;

    return (
      <ul className="TodoList">
        { todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
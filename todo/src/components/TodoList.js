import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div className='todo-list-container'>
        {this.props.todoProps
          .map(todo => (
            <Todo
              todo={todo}
              key={todo._id}
              toggle={this.props.toggle}
              delete={this.props.delete}
            />
          ))
          .filter(
            todo => todo.props.todo.user === localStorage.getItem('user'),
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ todoProps: state.todoReducer.todos });

export default connect(
  mapStateToProps,
  {},
)(TodoList);

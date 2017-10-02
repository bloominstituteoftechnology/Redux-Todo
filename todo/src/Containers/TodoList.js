import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List';
import { toggleTodo, removeTodo } from '../Actions';
import Todo from '../Components/Todo';

class TodoList extends Component {
  render() {
    return (
      <List>
          {this.props.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggle={() => {this.props.toggleTodo(todo.id)}}
                remove={() => {this.props.removeTodo(todo.id)}}/>
            );
          })}
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { toggleTodo, removeTodo })(TodoList);

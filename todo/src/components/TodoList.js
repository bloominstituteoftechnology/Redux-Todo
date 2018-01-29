import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions';
import { removeTodo } from '../actions';

class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <div>
              <li
                key={todo.id}
                onClick={() => this.props.toggleTodo(todo.id)}
                  style={{
                    textDecoration:
                      todo.completed ?
                        'line-through' :
                        'none'
                  }}>
                {todo.text}
              </li>
              <button onClick={() => this.props.removeTodo(todo.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleTodo, removeTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

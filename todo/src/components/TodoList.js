import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <div key={Math.random()}
                 onClick={() => this.props.toggleTodo(todo.id)}
                 style={todo.completed ? {textDecoration: "line-through" } : null}
            >
              {todo.value}
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);

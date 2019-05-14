import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  // QUESTION: where are the props coming from here?
  addTodo = e => {
      console.log('addTodo activated')
      console.log(this.props)
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    // above gets me ADD_TODO

    this.setState({ newTodo: '' });
  };

  toggleTodo = id => {
    this.props.toggleTodo(id)
    console.log(this.props.toggleTodo(id));
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-list">
          {this.props.todos &&
            this.props.todos.map(todo => (
              <h4 className={`todo ${todo.completed? 'completed': null}`}
              onClick={() => this.toggleTodo(todo.id)} key={todo.id}>
                {todo.value}
              </h4>
            ))}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new todo"
        />
        <button onClick={this.addTodo}>Add todo</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);

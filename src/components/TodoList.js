import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTodo, toggleComplete, deleteTodo } from '../actions/actions';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  addTodo(event) {
    event.preventDefault();
    const { addTodo: addThisTodo } = this.props;
    const { input } = this.state;
    addThisTodo(input);
    this.setState({ input: '' });
  }

  toggleComplete(id) {
    const { toggleComplete: toggleThisComplete } = this.props;
    toggleThisComplete(id);
  }

  deleteTodo(id) {
    const { deleteTodo: deleteThisTodo } = this.props;
    deleteThisTodo(id);
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <Todo
        key={todo.id}
        onClick={() => this.toggleComplete(todo.id)}
        onButton={() => this.deleteTodo(todo.id)}
        {...todo}
      />
    ));

    return (
      <div>
        <ul className="todos">
          {todos}
        </ul>
        <form onSubmit={this.addTodo}>
          <input type="text" value={this.state.input} onChange={this.onChange} placeholder="New todo" />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps, { addTodo, toggleComplete, deleteTodo })(TodoList);

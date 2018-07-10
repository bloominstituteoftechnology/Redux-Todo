import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTodo, toggleComplete } from '../actions/actions';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  addTodo(event) {
    event.preventDefault();
    const { addTodo: addThisTodo } = this.props;
    const { input } = this.state;
    addThisTodo(input);
  }

  toggleComplete(id) {
    const { toggleComplete: toggleThisComplete } = this.props;
    toggleThisComplete(id);
  }

  render() {
    const todos = this.props.todos.map((todo, index) => (
      <Todo key={todo.id} onClick={() => this.toggleComplete(todo.id)} {...todo} tabIndex={index} />
    ));

    return (
      <div>
        {todos}
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
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps, { addTodo, toggleComplete })(TodoList);

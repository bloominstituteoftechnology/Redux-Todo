import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo } from '../actions';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggle() {
    this.props.toggleTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
      const { todo } = this.props;
      const { value, completed } = todo;

      return (
        <li className="TodoItem">
          <div className="fancy-checkbox" onClick={ this.handleToggle }>
            <input 
              type="checkbox" 
              className="btn-toggle" 
              onClick={ this.handleToggle } 
              name="toggle" 
              checked={ completed }
            />
            <label htmlFor="toggle"> </label>
          </div>
          <p className={`todo-text ${completed ? 'completed' : ''}`} >{ value }</p>
          <span>
            <button className="btn btn-delete" onClick={ this.handleDelete } >X</button>
          </span>
        </li>
      );
  }
};

const mapStateToProps = (state) => ({ todos: state.todos });
export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoItem);
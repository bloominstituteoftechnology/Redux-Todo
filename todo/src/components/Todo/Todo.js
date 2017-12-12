import React, { Component } from 'react';
import './Todo.css';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../actions/todos';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  del = () => {
    console.log('delete at index ', this.props.index);
    this.props.deleteTodo(this.props.index);
  }

  toggle = () => {
    this.props.toggleTodo(this.props.index);
    const ref = 'todo' + this.props.index;
    this.refs[ref].classList.toggle('Todo--completed');
  }

  render () {
    return (
      <div className="Todo">
        <span 
          className="Todo__text" 
          ref={'todo' + this.props.index}
          onClick={this.toggle}
        >
          {this.props.todo.text}
        </span>
        <button className="Todo__delete" onClick={this.del}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { deleteTodo, toggleTodo })(Todo);
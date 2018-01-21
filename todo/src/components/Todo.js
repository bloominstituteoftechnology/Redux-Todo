import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
/*
import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

class Todo extends Component {
  toggleComplete() {

  }
  render() {
    return (
      <li> 
        <input
          type="checkbox"
          onChange={this.toggleComplete.bind(this)}
          />
          {this.props.todo.value}
          </li>
    );
  }
}

export default connect(null, )(Todos)* unfinished*/
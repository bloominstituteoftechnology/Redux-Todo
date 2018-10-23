import React, { Component } from 'react';
import { connect } from 'react-redux';
import { COMPLETE_TODO } from '../actions';

class Todos extends Component {
  render() {
    return (
      <ul className="todos">
        {this.props.todos.map( todo => {
          return (<li>
            {todo.value}
            {todo.completed ? 'done' : 'not done'}
          </li>)
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { COMPLETE_TODO })(Todos);
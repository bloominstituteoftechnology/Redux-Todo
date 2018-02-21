import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div>
      {/* { this.props.todo.map(item => {
        return (
          <TodoItem />
        );
      })} */}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    todo: state,
  }
}

export default TodoList;
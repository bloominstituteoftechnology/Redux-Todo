import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = props => (
    <p>

      {props.todos.map(x => <Todo item={x} key={x.id} />)}
    </p>
  );

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {})(TodoList);
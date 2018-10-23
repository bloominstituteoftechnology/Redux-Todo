import React from 'react';
import { connect } from 'react-redux';

import Todos from './Todos';

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return <Todos todo={todo} key={index} taskIndex={index} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);

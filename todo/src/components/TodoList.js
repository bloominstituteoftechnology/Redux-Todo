import React from 'react';
// React redux imports
import { connect } from 'react-redux';
// Component imports
import Todos from './Todos';

function TodoList(props) {
  return (
    <div>
      {/* Maps through array and displays the todo components */}
      {props.todos.map((todo, index) => {
        return <Todos todo={todo} key={index} taskIndex={index} />;
      })}
    </div>
  );
}

// Puts state in props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// Connects to Redux store
export default connect(mapStateToProps)(TodoList);

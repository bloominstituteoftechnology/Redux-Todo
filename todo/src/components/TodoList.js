//import React from 'react';





//All Ryan's Code
import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

const TodoList = props => {
  //console.log("props: ", props.todos);
  //console.log("connect: ", connect)
  return (
    <div>
      {props.todos.map(todo => (
        <div
          style={todo.completed ? { textDecoration: 'line-through' } : null}
          onClick={() => props.completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.task}
        </div>
      ))}
    </div>
  );
};

const mapStoreStateToComponentProps = state => {
    //console.log("state: ", state)
  return {
    todos: state
  };
};
export default connect(mapStoreStateToComponentProps, { completeTodo })(TodoList);

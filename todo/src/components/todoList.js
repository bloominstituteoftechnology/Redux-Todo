import React from 'react';
import { connect } from 'react-redux';
import { complete_todo } from '../actions';

function TodoList(props) {
  console.log(props);
  return (
    <ul>
      {props.todo.map(item => {
        let completed = item.completed
          ? { textDecoration: 'line-through' }
          : { textDecoration: 'none' };
        console.log(item.completed, completed);
        return (
          <li
            style={completed}
            key={item.id}
            onClick={() => props.complete_todo(item.id)}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
}

const mapStatetoProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStatetoProps, { complete_todo })(TodoList);

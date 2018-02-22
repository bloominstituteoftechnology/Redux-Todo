import React from 'react';
import { connect } from 'react-redux';
import { complete_todo_item, delete_todo_item } from '../actions';

function TodoList(props) {
  console.log(props);

  return (
    <ul>
      { props.todo.map(item => {
        let completed = item.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        console.log(item.completed, completed);
        return (
          <div>
            <li style={completed} key={item.id} onClick={() => props.complete_todo_item(item.id)}>{item.payload}</li>
            <button onClick={() => props.delete_todo_item(item.id)}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
}

const mapStatetoProps = (state) => {
  return {
    todo: state,
  }
}

export default connect(mapStatetoProps, { complete_todo_item, delete_todo_item })(TodoList);
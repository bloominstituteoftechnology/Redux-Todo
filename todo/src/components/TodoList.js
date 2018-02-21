import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
  console.log(props);
  return (
    <div>
      { props.todo.map(item => {
        return (
          <li key={item.id}>{item.payload}</li>
        );
      })}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    todo: state,
  }
}

export default connect(mapStatetoProps)(TodoList);
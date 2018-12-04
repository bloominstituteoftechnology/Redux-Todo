import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoItem } from '../actions';

function TodoItem(props) {

  const {item} = props;

  return (

    <div className='todo-item' onClick={() => props.toggleTodoItem(item.value)}>

      <p style={{textDecoration: item.completed && 'line-through'}}>{item.value}</p>

    </div>

  );

}

export default connect(null, {toggleTodoItem: toggleTodoItem})(TodoItem);

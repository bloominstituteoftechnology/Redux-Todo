import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoItem } from '../actions';

import './TodoItem.scss';

function TodoItem(props) {

  const {item} = props;

  return (

    <div className='todo-item' onClick={() => props.toggleTodoItem(item.value)}>

      <li style={{textDecoration: item.completed && 'line-through'}}>{item.value}</li>

    </div>

  );

}

export default connect(null, {toggleTodoItem: toggleTodoItem})(TodoItem);

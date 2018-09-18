import React from 'react';
import { connect } from 'react-redux';
import { toggle_completed, delete_item } from '../actions'

const Task = props => {
  console.log(props.delete_item);
  return (
    <div className='todo-list'>
      <li onClick={ e => {
          e.preventDefault()
          props.toggle_completed(props.item.id)
          }}
        key={props.item.id}
        style={{textDecoration: props.item.completed ? 'line-through' : 'none'}}>
        {props.item.value}
      </li><button onClick={() => props.delete_item(props.item.id)}>Delete Item</button>
    </div>
      )}


  const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {toggle_completed, delete_item})(Task)

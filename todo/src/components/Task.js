import React from 'react';
import { connect } from 'react-redux';
import { toggle_completed, delete_item } from '../actions'

const Task = props => {
  return (
    <React.Fragment>
      <li onClick={ e => {
          e.preventDefault()
          props.toggle_completed(props.item.id)
          }}
        key={props.item.id}
        style={{textDecoration: props.item.completed ? 'line-through' : 'none'}}>
        {props.item.value}
      </li>
      <button onClick={() => props.delete_item(props.item.id)}>
        Delete Item
      </button>
    </React.Fragment>
      )}


  const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {toggle_completed, delete_item})(Task)

import React from 'react'
import {connect} from 'react-redux';
import {updateComplete} from './action/action'

const ListTodo =(props) => {
  return (
    <div>
      {props.todos.map( todo => {
        return (
          <h3 onClick={ () => props.updateComplete(todo.id)}>
            {todo.value}
          </h3>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {todos: state}
}

export default connect(mapStateToProps, {updateComplete})(ListTodo)
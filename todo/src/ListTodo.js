import React from 'react'
import {connect} from 'react-redux';

const ListTodo =(props) => {
  return (
    <div>
      {props.todos.map( todo => {
        return (
          <h3>{todo.value}</h3>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {todos: state}
}

export default connect(mapStateToProps)(ListTodo)
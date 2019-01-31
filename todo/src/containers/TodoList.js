import React from 'react'
import { connect } from 'react-redux'

function TodoList(props) {
  return (
    <div>
      <ul>
          {props.todos.map((todoItem, index) => {
              return <li key={index}>{todoItem.todo}</li>
          })}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
    return { todos : state.todos }
} 

export default connect(mapStateToProps)(TodoList)
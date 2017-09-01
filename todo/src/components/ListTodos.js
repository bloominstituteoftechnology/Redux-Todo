import React from 'react'
import {connect} from 'react-redux'

import Todo from './Todo'

const ListTodos = ({todos}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo todo={todo} index={index} key={index}/>
    ))}
  </ul>
)

const mapStateToProps = state => ({todos: state.todos})

export default connect(mapStateToProps, null)(ListTodos)
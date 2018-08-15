import React from 'react'
import {Button} from 'reactstrap';

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => {
  return{
    type: 'DELETE_TODO',
    id: id
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let RemoveTodo = ({id, dispatch}) => {
  return (
      <div>
        <Button onClick={e => {
          e.preventDefault()
          dispatch(deleteTodo(id))

          //console.log(dispatch(deleteTodo(id)));
        }}>Remove TODO</Button>
      </div>
  )
}

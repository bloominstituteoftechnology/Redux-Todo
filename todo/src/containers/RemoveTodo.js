import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'
import {Button} from 'reactstrap';

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

RemoveTodo = connect()(RemoveTodo)
export default RemoveTodo

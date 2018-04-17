import React from 'react'
import { removeTodo, updateTodo } from '../../actions'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: tomato;
  padding: 10px;
  margin-bottom: 10px;
`

const Label = styled.div`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'}
  margin-right: 10px;
`

const Todo = props => (
  <Wrapper>
    <Label completed={props.completed} onClick={() => props.updateTodo(props)}>
      {props.value}
    </Label>
    <button onClick={() => props.removeTodo(props.value)}>
      &times;
    </button>
  </Wrapper>
)

Todo.propTypes = {
  value: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
}

export default connect(null, { removeTodo, updateTodo })(Todo)

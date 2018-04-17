import React, { Component } from 'react'
import Todo from './../Todo'
import PropTypes from 'prop-types'
import { addTodo } from '../../actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

const TodosContainer = styled.div`
  width: 800px;
`

const Input = styled.input`
margin: 10px;
`

let input
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  
  todoElements() {
    return this.props.todos.map((todo, i) => <Todo {...todo} key={i} />)
  }

  handleSubmit = (e) => {
    this.props.addTodo(input.value)
    e.preventDefault()
  }
  
  // input needs to be in the state
  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input innerRef={node => (input = node)} placeholder='New todos here' />
        </form>
        <TodosContainer>
          {this.todoElements()}
        </TodosContainer>
      </React.Fragment>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(TodoList)


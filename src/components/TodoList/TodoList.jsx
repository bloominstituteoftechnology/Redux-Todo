import React, { Component } from 'react'
import Todo from './../Todo'
import PropTypes from 'prop-types'
import { addTodo } from '../../actions'
import { connect } from 'react-redux'

let input

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  // input needs to be in the state
  render () {
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            this.props.addTodo(input.value)
            e.preventDefault()
          }}
        >
          <input ref={node => (input = node)} placeholder='New todos here' />
        </form>
        <TodoListLayout {...this.props} />
      </React.Fragment>
    )
  }
}
const TodoListLayout = props => (
  <div>{props.todos.map((todo, i) => <Todo {...todo} key={i} />)}</div>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
export default connect(null, { addTodo })(TodoList)

TodoList.propTypes = {
  addTodo: PropTypes.func
}

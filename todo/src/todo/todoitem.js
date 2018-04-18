import React, { Component } from 'react'
import Todo from './Todo'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

let input;

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: ''
    }
  }

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

export default connect(null, { addTodo })(TodoList)
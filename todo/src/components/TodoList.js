import React from "react"
import { connect } from "react-redux"
import { addTodo, toggleTodo } from '../actions'

class TodoList extends React.Component {
  state = {
    newTodo: ""
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({ newTodo: e.target.value })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  }

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  }

  render() {
    return (
      <>
        <h2>Todo List!</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4 onClick={e => this.toggleTodo(e, index)} key={index}>{todo.todo}</h4>
          ))}
        </div>
        <input type="text" value={this.state.newTodo} onChange={this.handleChanges} />
        <button onClick={this.addTodo}>Add todo</button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps, { addTodo, toggleTodo })(TodoList);
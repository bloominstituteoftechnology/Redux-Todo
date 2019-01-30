import React from "react"
import { connect } from "react-redux"
import { addTodo, toggleTodo, clearCompleted } from '../actions'

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

  clearCompleted = e => {
    e.preventDefault();
    this.props.clearCompleted(this.props.todos)
  }

  render() {
    return (
      <>
        <h2>Todo List!</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4 style={todo.completed ? { textDecoration: 'line-through'} : null } onClick={e => this.toggleTodo(e, index)} key={index}>{todo.todo}</h4>
          ))}
        </div>
        <input type="text" value={this.state.newTodo} onChange={this.handleChanges} />
        <button onClick={this.addTodo}>Add todo</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps, { addTodo, toggleTodo, clearCompleted })(TodoList);
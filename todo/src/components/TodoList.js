import React from 'react';
import { connect } from 'react-redux';
import { addNewTask, toggleTask } from '../actions';

class TodoList extends React.Component {
  state = {
    todos: ''
  }

  handleChanges = e => {
    this.setState({ todos: e.target.value })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.todos);
    this.setState({ todos: '' })
  }

  toggleTask = e => {
    e.preventDefault();
    this.props.toggleTask(this.props.todoList.todos.id)
  }


  render() {
    return (
      <React.Fragment>
        <div>
          <h1> My Todo List </h1>
            {this.props.todos.map(task => (
              <h4 onClick={e => this.toggleTask(e)}>
                {key = task.id}
                {task.task}
                {task.completed}
              </h4>
            ))}
        </div>
        <input 
        type = 'text'
        value={this.state.todos}
        onChange={this.handleChanges}
        placeholder="Add new task"
        />
        <button onClick={this.addTodo}>Submit Task</button>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todoList.todos
  }
}

export default connect(
  mapStateToProps,
  { addNewTask, toggleTask }
) (TodoList);
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

  toggleTask = (e) => {
    e.preventDefault();
    this.props.toggleTask(this.props.todos.id)
  }


  render() {
    return (
      <React.Fragment>
        <form onSubmit={TodoList.addTodo}>
          <div>
            <h1> My Todo List </h1>
            
              {this.props.todos.map(task => (
                <h4 
                  onClick={this.toggleTask} 
                  key={task.id}
                  style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                  >
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
        </form>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.taskReducer.todos
  }
}

export default connect(
  mapStateToProps,
  { addNewTask, toggleTask }
) (TodoList);
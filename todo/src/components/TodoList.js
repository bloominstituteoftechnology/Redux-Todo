import React from 'react';
import { connect } from 'react-redux';
import { addNewTask, toggleTask } from '../actions';

class TodoList extends React.Component {
  state = {
    newTask: ''
  }

  handleChanges = e => {
    this.setState({ newTask: e.target.value })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: '' })
  }

  toggleTask = (e, index) => {
    e.preventDefault();
    this.props.toggleTask(index)
  }


  render() {
    return (
      <React.Fragment>
        <form onSubmit={TodoList.addTodo}>
          <div>
            <h1> My Todo List </h1>
              {this.props.todos.map((task, index) => (
                <h4 
                  onClick={e => this.toggleTask(e, index)} 
                  key={index}
                  style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                  >
                  {task.task}
                </h4>            
              ))}
          </div>
          <input 
          type = 'text'
          value={this.state.newTask}
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
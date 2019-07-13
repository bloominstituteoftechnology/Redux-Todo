import React from 'react';
import { connect } from 'react-redux';
import { addTask, toggleComplete } from '../actions';

class TodoList extends React.Component {
  state = {
    newTask: ''
  };

  handleChanges = e => {
    this.setState({ newTask: e.target.value });
  };

  addNewTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
  };

  handleToggle = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.addNewTask}>
          <input
            type='text'
            value={this.state.newTask}
            onChange={this.handleChanges}
            placeholder='New Task'
          />
          <button type='submit'>Add New Task</button>
        </form>
        <div>
          {this.props.todos.map((todo, id) => (
            <div
              key={id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
              onClick={e => this.handleToggle(e, id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(
  mapStateToProps,
  { addTask, toggleComplete }
)(TodoList);

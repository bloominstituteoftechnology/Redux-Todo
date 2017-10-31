import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions';

class ToDo extends Component {
  
  constructor() {
    super();
    this.state = {
      newTask: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.newTask);
    this.setState({newTask: ''});
  }

  handleChange(event) {
    this.setState({newTask: event.target.value});
  }

  toggleTodo(index) {
    this.props.toggleTodo(index);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleChange } placeholder="Add Task..." value={ this.state.newTask } />
        </form>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return (
                <li key = { index }>
                  { todo.text }
                  <input type="checkbox" checked={todo.completed} onClick = {() => this.toggleTodo(index)}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, setVisibilityFilter })(ToDo);
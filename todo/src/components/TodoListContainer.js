import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoListContainer extends Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    }
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  addTodoHandler = (e) => {
    const text = this.state.todo;
    console.log(text);
    const newTodo = {
      text,
      completed: false,
      id: this.props.todos ? this.props.todos.length + text: 0 + text
    }
    this.props.addTodo(newTodo);
    this.setState({todo: ''})
  }


  render() {
    console.log("Props in TodoList:", this.props);
    return (
      <div className="TodoList-Container">
        <ul>{this.props.todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>
        })}</ul>
        <form>
          <input type="text" name="todo" placeholder="todo..."
          onChange={this.handleChange}
          value={this.state.todo}/>
          <button type="button" onClick={this.addTodoHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State in Redux Store:", state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(TodoListContainer);

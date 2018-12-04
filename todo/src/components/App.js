import React, { Component } from 'react';
import './App.css';
import { addTodo, toggleComplete, actionDeleteTodo } from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    inputText:''
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value});
  }

  handleSubmit = ev => {
    ev.preventDefault();
    console.log('clicked');
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ''
    })
  }

  toggleTodo = index => {
    this.props.toggleComplete(index);
  }

  deleteTodo = index =>{
    this.props.actionDeleteTodo(index);
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="inputText"
          onChange={this.handleChange}
          placeholder="add a todo"
          value={this.state.inputText}
          autoComplete="off"
        />
        <button type="submit">add todo</button>
        </form>
        <div className="list">
          {this.props.todos.map((todo,index) => {
            return (
            <div 
              className="todo" 
              onClick={() => this.toggleTodo(index)} 
              id={index}
            >
              {todo.complete ? <h3>X</h3> : null}

              <p key={index}>{todo.value}</p>

              {todo.complete ? 
                <button 
                  onClick={()=>this.deleteTodo(index)}
                >
                Delete
                </button> : null 
              }
            </div>)
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps, 
  {
    addTodo, 
    toggleComplete,
    actionDeleteTodo
  })
  (App);
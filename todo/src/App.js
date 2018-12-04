import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  componentDidMount() {
    if(localStorage.getItem('todos') !== null && localStorage.getItem('todos') !== 'null'){
      let myTodos = JSON.parse(localStorage.getItem('todos'));
      myTodos.forEach((todo,index) => {
        this.props.addTodo(todo.todo);
        if(todo.completed){
          this.props.toggleComplete(index);
        }
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos',JSON.stringify(this.props.todos))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTheTodo = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.newTodo);
  }

  toggleComplete = index => {
    this.props.toggleComplete(index);
  }

  deleteTodo = index => {
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTheTodo}>
          <input name='newTodo' value={this.state.newTodo} 
          placeholder='add todo item' onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
        </form>

        {this.props.todos.map((todo,index) => {
          return (
            <>
          <div className='todo-item'
            onClick={()=>this.toggleComplete(index)}
            key={todo.todo}
            >{todo.todo}</div>
          <div className='complete-status'>completed: {` ${todo.completed}`}</div>  
          <button onClick={()=>this.deleteTodo(index)}>Delete</button>
          </>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
} 

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
}

const withState = connect(
  mapStateToProps,
  {
    addTodo,
    toggleComplete,
    deleteTodo
  }
);

export default withState(App);

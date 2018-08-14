import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, toggleTodo, removeTodo, trashTodo} from './actions'; 
import {connect} from 'react-redux'; 

class App extends Component {

  newItem = event => {
    event.preventDefault(); 
    const name = this.input.value; 
    this.input.value = ''
    addTodo(name,false); 
  }
  render() {
    console.log(this.props.todo)
    let todos; 
    this.props.todo.length > 0 && this.props? todos = this.props.todo : todos = [];
    
    return (
      <div>
        <h1>TODO List</h1>
        <ul>
          {/* Map through the list and produce them as a li */}
          {todos.map((todo, i)=> <li style = {{textDecoration: todo.completed ? 'line-through' : 'none'}} onDoubleClick={trashTodo} onClick ={toggleTodo} key={i}>{todo.value} ---- {todo.completed.toString()}</li>)}
        </ul>
        <input id="todo" type="text" placeholder = "add todo..."
        ref={(input) => this.input = input}/>
        {/* allows us to access the input value with adding a prop */}
        <br/>
        <br/>
        <button onClick= {this.newItem}>Submit</button>
        <button onClick = {removeTodo}>Remove Completed</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state
  }
}

export default connect(mapStateToProps,{addTodo, toggleTodo})(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {toDoReducer} from './reducers';
import {addTodo, toggleTodo, deleteTodo} from './actions';
import Todo from './components/Todo';






class App extends Component {
  state = {
    newTodo: {
      value: '',
      completed: false
    },
    todos: this.props.todos
  }

  addTodo = (e) => {
    e.preventDefault();
    let newTodo = {...this.state.newTodo, id: Date.now() }
    this.props.addTodo(newTodo);
    this.setState({newTodo: {...this.state.newTodo, value: '', completed: false}})
  }

  handleInput = (e) =>{
    this.setState({newTodo: {...this.state.newTodo, value: e.target.value}});
  }
  render() {
    return (
      
      <div className="App">
      
      {this.props.todos.map(todo => <Todo delete={this.props.deleteTodo}toggle={this.props.toggleTodo}id={todo.id} todo={todo}/>) }
       

      <form onSubmit={this.addTodo}>
        <input type='text' value={this.state.newTodo.value} onChange={this.handleInput}/>
        <button>Submit</button>
      </form>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(App);

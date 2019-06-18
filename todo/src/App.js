import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions';
import { toggleTodo } from './actions';
import { deleteTodo } from './actions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'; 

import styled from 'styled-components';

const H1 = styled.h1`
  height: 50px;
  font-size: 30px; 
`

class App extends React.Component {

  addTodo = todo => {
    this.props.addTodo(todo)
  }
  toggleTodo = id => {
    console.log(id)
    this.props.toggleTodo(id)
  }

  deleteTodo = e => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todos)
  }

  render(){
    return (
      <div className="App">
        <H1 className=' bg-teal-500 text-white'>TodoList</H1>
        <TodoForm addTodo={this.addTodo} deleteTodo={this.deleteTodo}/>
        <TodoList todos={this.props.todos}  toggleTodo={this.toggleTodo}/>
      </div>
    );
    }
  }

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo } )(App)

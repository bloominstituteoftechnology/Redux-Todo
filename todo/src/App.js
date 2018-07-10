import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo, removeTodos, handleNewTodo } from './actions/index';
import TodoList from './containers/TodoList';
import TodoForm from './components/TodoForm';


class App extends Component {

  handleNewTodo = (e) => {
    this.setState({newTodo: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My god, you've got SO MUCH TO DO!!</h1>
        </header>
        <TodoList />
        <TodoForm changeEvent={this.props.addTodo}
                  displayText={this.props.newTodo} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
    todos: state.todos,
    newTodo: state.newTodo, 
  }
}


export default connect(mapStateToProps, { addTodo, removeTodos, handleNewTodo })(App);

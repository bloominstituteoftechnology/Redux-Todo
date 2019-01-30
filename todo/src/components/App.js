import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, markFinished, deleteTodo, deleteFinished } from '../actions';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  componentDidMount(){
    window.addEventListener('beforeunload', this.handleLocalStorage);
  }
  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.handleLocalStorage);
  }
  handleLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.props.todos));
  }
  render() {
    return (
      <div className="App">
        <TodoInput 
          addTodo={this.props.addTodo}
          deleteFinished={this.props.deleteFinished}
        />
        <TodoList 
          todos={this.props.todos}
          markFinished={this.props.markFinished}
          deleteTodo={this.props.deleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo, markFinished, deleteTodo, deleteFinished })(App);
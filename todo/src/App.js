import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoList/TodoInput';
import { addTodo, toggleTodo } from './actions';

class App extends Component {
  constructor() {
    super();
    this.state ={
      todoInputText: '',
    }
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      todoInputText: e.target.value
    });
  };

  addNewTodo = () => {
    this.props.addTodoOnProps(this.state.todoInputText);
    this.setState({
      todoInputText: ''
    });
  };

  toggleCompleted = index => {
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoInput 
          addTodo={this.addNewTodo}
          inputText={this.state.todoInputText} 
          onInputChange={this.onChange}
        />
        <TodoList 
          todos={this.props.todosOnProps} 
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todosOnProps: state.todos
  };
};

export default connect(mapStateToProps, { addTodoOnProps: addTodo, toggleTodo })(App);

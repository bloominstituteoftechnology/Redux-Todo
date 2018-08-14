import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';
import { addTodo } from './actions';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentText: ''
    }
  }

  handleInputChange = (event) => {
    this.setState( { [event.target.name]: event.target.value });
  }

  addTodo = () => {
    let todoText = this.state.currentText;
    let newTodo = {
      id: this.props.todos.length,
      completed: false,
      text: todoText
    };
    this.props.addTodoHandler(newTodo);
    this.setState( { currentText: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <TodoList todos={this.props.todos} />
        <TodoForm handleInputChange={this.handleInputChange} currentText={this.state.currentText} addTodo={this.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoHandler: todo => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

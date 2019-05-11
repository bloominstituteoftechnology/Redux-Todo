import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }
  handleInputChange = e => {
    this.setState ({ [e.target.name]: e.target.value})
    //reusable and incase we have more input fields
  }
  addTodo = () => {
    const { todoText } = this.state;
    const newTodo = { id: this.props.todos.length+1, completed:false, text: text };
    this.props.addTodo(newTodo);
    this.setState({todoText});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo</h1>
        
        </header>
        <TodoForm todoText ={this.state.todoText} handleInputChange={this.handleInputChange} />
        <Todos todos={this.props.todos} />
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      todos: state
    };
  }



export default connect(mapStateToProps, { addTodo })(App);
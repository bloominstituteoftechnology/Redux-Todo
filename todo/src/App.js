import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addtodo, toggletodo } from './action/index';

const strikethrough = { textDecoration: "line-through" };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleInput: '',
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value }); 
  }

  handleAddTodo = () => {
    this.props.addtodo(this.state.handleInput);
    this.setState({ handleInput: '' });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input 
        type='text' 
        placeholder='Add ToDo' 
        name='handleInput'
        onChange={this.handleInputChange}
        value={this.state.handleInput}
        />
        <button onClick={() => this.handleAddTodo()}> Add ToDo </button>
        {this.props.todos.map((todo, index) => (
          <div key={index} onClick= {() => this.props.toggletodo(todo.id)} style={todo.complete ? strikethrough : null} > {todo.todo} </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state  
  };
};

export default connect(mapStateToProps, { addtodo, toggletodo })(App);

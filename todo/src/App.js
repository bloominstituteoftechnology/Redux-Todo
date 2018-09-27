import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodos';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  state = {
    todotext: "",
  };

  handleInputChange = event => {
    this.setState({ todotext: event.target.value })
  }

addTodo = event => {
event.preventDefault();
this.props.addTodo(this.state.todotext);
};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="TodoBox">
          <h1>Hello I'm a Work in Progress!</h1>
          <AddTodo 
                handleInputChange={this.handleInputChange} 
                todotext={this.state.todotext}
                todoList={this.props.todos}
                addTodo={this.addTodo} />  
                </div>
        </div>
      
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo }, dispatch)
};  

export default connect(null, mapDispatchToProps)(App);


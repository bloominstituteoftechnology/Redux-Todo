import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import AddTodo from './AddTodo';
import { fetchTodo } from "./actions";


class App extends Component {
  componentDidMount(){
    this.props.fetchTodo();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddTodo />
        <ul>
          {this.props.todos.map(itemMaped => {
              return (
                <div>
                    <li key={itemMaped}>{itemMaped} <button id="deleteButton">X</button></li>
                    
                </div>
              )
            }
          )}
          
            
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    todos: state
  }
}

export default connect(mapStateToProps, { fetchTodo }) (App);

import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import {addTodo} from './actions/index'

class App extends Component {
  constructor(){
    super()
    this.state= {
      
    }
  }
  
  
  
  render() {
    return (
      <div className="App">
        <form>
          <input 
          type = 'text'
          />
        </form>
        <TodoList/>
      </div>
    );
  }
}
 const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
    }


export default connect(mapStateToProps, {addTodo}) (App);

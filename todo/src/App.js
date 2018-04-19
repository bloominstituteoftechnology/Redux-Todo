import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions/actions';
class App extends Component {

  constructor() {
    super()
    this.state = {
      newTodo: ""
    }
  }



  render() {
    console.log(this.props.todos);
    return (
      <div >
       <h1> *** TODO List ***</h1>

       <div className="todo"> {this.props.todos.map((todo, index) => {
          return (
            <div key={index}> {todo.value} </div>
          )
        })}
        </div>
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      todos: state
  };
};
export default connect(mapStateToProps, { addTodo, toggleTodo })(App)

App;

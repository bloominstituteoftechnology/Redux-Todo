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

  inputChange = (event) => {
    this.setState({ newTodo: event.target.value})
  }

  valueChange = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({newTodo: ""});
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
        <form onSubmit={this.valueChange}>
          <input type='text' value={this.state.newTodo} onChange={this.inputChange} /> 



        </form>


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

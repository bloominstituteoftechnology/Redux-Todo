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
      <div className="Card-body" >
       <h1 className="Note-header"> MUST DO LIST</h1>

        <form onSubmit={this.valueChange}>
          <input className="InputElement" type='text' value={this.state.newTodo} onChange={this.inputChange} placeholder="Enter new task" /> 


        </form>
       <div className="todo"> {this.props.todos.map((todo, index) => {
          return (
            <div key={index} className="Card-item"> {todo.value} </div>
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

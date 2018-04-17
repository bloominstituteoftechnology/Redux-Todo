import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { addTodo } from './Actions/Actions';
import DisplayTodo from './Components/DisplayTodo';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
  }
  submitToDo = () => {
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  }
  inputValue = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App</h1>
          <input
            placeholder='type in a new todo'
            name='inputValue'
            value={this.state.inputValue}
            onChange={this.inputValue}
          />
          <button onClick={this.submitToDo}>Submit</button>
        </header>
        <DisplayTodo todos={this.props.todos}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state
  };
};
export default connect(mapStateToProps, {addTodo})(App);

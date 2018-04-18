import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Add_todo } from './ActionCall';



class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      newTodo: "",
    }
  }

  handleAddToDo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitToDo = () => {
    let { value } = this.state;
    value = <div>{this.state.newTodo}</div>;
    this.setState({ value, newTodo: "" });
  };

  idGen = () => {
    let randomNum = Math.random();
    randomNum = randomNum.toString().split('').splice(2).join('');
    let pt2 = Math.random();
    pt2 = pt2.toString().split('').splice(2).join('');
  return randomNum.concat(pt2);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Todos</h1>
        </header>
        <input 
        type="text"
        placeholder='new todo'
        name='newTodo'
        value={this.state.newTodo}
        onChange={this.handleAddToDo}
         /> 
         <button onClick={this.handleSubmitToDo}>new todo</button>
        <p className="App-intro">
          <button onClick={() => {this.props.Add_todo(this.state.value)}}> Confirm todo </button>
        </p>
        <div className='todo-container'>
        <p> {this.props.note} </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (note) => {
  return {
      note: note
  };
};

export default connect(mapStateToProps, { Add_todo })(App);

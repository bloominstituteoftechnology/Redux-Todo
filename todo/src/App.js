
import React, { Component } from 'react';

import './App.css';
import {add} from './actions';
import { connect } from 'react-redux';




class App extends Component {

  constructor () {
    super();

    this.state = {

      newTask: '',
    }


  }

  inputHandler = (event) => {
    const value = event.target.value;

    this.setState({newTask:value})
  }
  render() {
    console.log(this.state.newTask)
    return (
      <div className="App">
        {this.props.todo.map(item => {return <ul key={this.props.todo.indexOf(item)}> <li><form> <input type='checkbox'></input></form></li> 
        <h2>{item}</h2></ul>}) }
        <form> <input value= {this.state.newTask} onChange={this.inputHandler} type='text'></input></form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todo: state.todo
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, {})(App);
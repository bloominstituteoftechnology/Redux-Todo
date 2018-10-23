import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toDoList : ''
        }
    } //constructor end....
    
  changeHandler = (event) => {
      event.preventDefault();
      this.setState({ [event.target.name]  : event.target.value })
  }
  
  addTaskToList = (event) => {
      
  };

  render() {
    return (
      <div className="App">
          <h1>Hello Todo</h1>
      </div>
    );
  }
}// App Component end .....

const mapStateToProps = state => {
  return {
      toDoList : state.toDoList,
  };
};


export default connect(mapStateToProps, { })(App);

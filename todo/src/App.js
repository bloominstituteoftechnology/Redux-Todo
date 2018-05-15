import React, { Component } from 'react';
import ToDoList from './components/ToDoList'

import { connect } from 'react-redux';
import { addToDos } from './actions'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      aToDo: '',
    }
  }
 

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addToDos = () => {
    const { aToDo } = this.state;
    const toAdd = {
      todo: aToDo,
      completed: false,
    }
    this.props.addToDos(toAdd);
    this.setState({ aToDo: ''})
    // console.log('test on click')
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          <input 
            onChange={this.handleInputChange}
            placeholder="Type ToDo"
            value={this.state.aToDo}
            name="aToDo"
          />
          <button onClick={this.addToDos} >Submit</button>          
        
        <ToDoList list={this.props.toDos}/>
      </div>
    );
  }
}



const mapStateToProps = state => {
  
  return {
    toDos: state.toDos,
    
  }
}
export default connect(mapStateToProps, { addToDos })(App);

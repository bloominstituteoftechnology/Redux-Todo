import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import ReactDOM from "react-dom";


  

class App extends Component {
  componentDidMount() {
    this.props.fetchtodoList();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddAnimals />
        <p className="App-intro">
          
          <ul className="App-intro">
            {this.props.todoList.map(toDO => <li key={tDo}>{toDo}</li>)}
          </ul>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>


    );
  }
}

  
const mapStateToProps = state => {
  // this is magic!
  return {
    todoListyarn : state // whatever is defined here, will be found on props for the `APP` component
  };
};

export default connect(mapStateToProps, { fetchAnimals })(App);
// this will `connect` our App component TO our REDUX store VIA the Provider.




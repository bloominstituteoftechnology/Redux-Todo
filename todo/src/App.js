import React, { Component } from 'react';
import './App.css';
import { store } from './index';
import { connect } from 'react-redux';


import TodoContainer from './components/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TO DO List</h1>
        <TodoContainer todos={store.getState().todos}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);

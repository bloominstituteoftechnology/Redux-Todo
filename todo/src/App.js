import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import TodoList from './components/TodoList' ;
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux <br/> ToDo Project </h1>
        </header>

        <TodoList />

      </div>
    );
  }
}
const mapStateToProps = state => {
  alert('hey');
  return {
    tasksList: state.tasksList,
  }
}

export default connect(mapStateToProps, { TodoList })(App) ;
// export default App;

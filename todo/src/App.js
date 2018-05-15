import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';
import { connect } from 'react-redux';
import { getTasks } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sagar's ToDo App</h1>
        </header>
        <NewTask/>
        <List tasks={this.props.tasks}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, { getTasks })(App);

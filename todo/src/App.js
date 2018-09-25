import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todos from './components/Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
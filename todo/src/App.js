import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Todos from './components/Todos';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      console.log(this.props),
      (
        <div className="App">
          <Todos todos={this.props.todos} />
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);

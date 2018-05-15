import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input />
        <button>add todo</button>
        {/* list will go here */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todo: state
  }
}

export default connect(mapStateToProps, {  })(App);
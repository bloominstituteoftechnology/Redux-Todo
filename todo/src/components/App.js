import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  state = {todoItem: ''}
  handleChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value //=<input name="" value=.../>
    }) };
  render() {
    return (
      <div className="App">
        <input type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleChange}/>
        <button>add todo</button>
        {/* list will go here */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state)
  return {
    todo: state
  }
}

export default connect(mapStateToProps, {  })(App);
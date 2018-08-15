import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  adding = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1> Todo but with Redux</h1>

        <form>
        <input
        type='text'
        placeholder='add todo'
        name='todo'
        autoComplete='off'
        value={this.state.todo}
        onChange={this.adding}
        />
        <button>Add</button>
        </form>
      </div>
    );
  }
}


export default App;

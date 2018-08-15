import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { submitTodo } from '../actions/actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Redux Todo App</h1>
        </header>
        {this.props.todos.map((todo) => {
          return (
            <p>
              {todo}
            </p>)
        })}

        <div className='form-container'>
          <div className='input-container'>
            <input className='input' onKeyPress={e => {if (e.charCode === 13) {
              let val = this.state.newTodo;
              this.setState({ newTodo: '' });
              this.props.submitTodo(val);
            }}} placeholder='Enter new item' value={this.state.newTodo} onChange={this.handleInputChange} />
            <button className='submit' onClick={() => {
              let val = this.state.newTodo;
              this.setState({ newTodo: '' });
              this.props.submitTodo(val)}
            }>Submit</button>
          </div>

          {/*<div className='search-container'>
            <input className='search' onKeyPress={e => {if (e.charCode === 13) {
              prop.submitSearch();
            }}} placeholder='search' onChange={prop.onchangeSearch} />
            <button className='submit-search' onClick={prop.submitSearch}>Submit</button>
          </div>

          <div className='clears'>
            <button className='clear-complete' onClick={prop.clearComplete}>Clear Completed Tasks</button>
            <button className='clear-all' onClick={prop.annihilate}>Clear All</button>
          </div>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { submitTodo })(App);

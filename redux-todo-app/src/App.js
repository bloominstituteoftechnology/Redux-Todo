import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addItem } from './actions';
import { connect } from 'react-redux';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      newTaskName: '',
      showForm: false,
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.taskName);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <form style={{margin: '20px'}}>
          <input required onChange={this.handleOnChange} name="taskName" type="text" placeholder="Name" style={{margin: '0 10px 0 0'}}/>
          <button onClick={this.handleSubmit} type="submit">Add Item</button>
        </form>
        <section>
          <h2>Tasks</h2>
          
            {this.props.todos.map(item => {
              return (
                <Todo key={Math.random() * 1000000 * Date.now()} item={item} />
              )}
            )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addItem })(App);

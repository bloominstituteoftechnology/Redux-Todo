import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'react';
import reducers from './reducers/reducers';
import Headline from './components/test';
import { updateName } from './actions';
import {connect} from 'react-redux';
import TodoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

class App extends Component {
  // bringing it back to basics, doing a walkthrough from lecture/Julie's notes.
  constructor() {
    super();
    this.state = {
      setName: '',
      }
    }

    inputHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    formSubmitHandler = (e) => {
      e.preventDefault();
      this.props.updateName(this.state.setName);
    }




  render() {
    return (
      <div className="App">
      <TodoList />
      <TodoForm />



        {/* <header className="App-header">
          <p>
            Redux Todo.
          </p>
          <div>
            <h2>Hello, {this.props.name}!</h2>
            <form onSubmit={this.formSubmitHandler} >
            <input type="text" name="setName" value={this.state.setName} onChange={this.inputHandler}/>
            <button type="submit">Submit!</button>
            </form>
          </div>
        </header> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {name: state.name}
}

export default connect(
  mapStateToProps, {updateName}
)(App);

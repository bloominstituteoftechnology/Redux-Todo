import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completed} from './actions/actions'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: '',
      completed: false,
      id: 0
    };
  }

  inputHandler = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  submitHandler = e => {
    this.props.addTodo(this.state);
    e.preventDefault();
    let newID = this.state.id + 1;
    console.log(newID);
    this.setState({
      newTodo: '',
      id: newID
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <input placeholder='New To Do' value={this.state.newTodo} onChange={this.inputHandler}/>
          <button type='submit'>Add To Do</button>
        </form>
        <div>
          {this.props.todo.map(item => <div>{item.newTodo}</div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, {addTodo, completed})(App);

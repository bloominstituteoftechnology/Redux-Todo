import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      newTodo: ''
    };
    this.updateNewTodo = this.updateNewTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">t o d o</h1>
        <form onSubmit={this.addTodo}>
          <input 
            id="textbox"
            placeholder="today, i will..."
            onChange={this.updateNewTodo}
            value={this.state.newTodo} 
            />
            <input type="submit" value="+" />
        </form>
        <ul>
          {this.props.todos.map((todo, i) => {
            return <li key={i}>{todo.value}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);

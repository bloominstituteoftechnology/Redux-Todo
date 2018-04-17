import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { addTodo, fetchTodos, toggleTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextTodo: ''
    }
  }

  componentDidMount() {
    console.log(this.props.todos);
    this.props.fetchTodos();
  }

  buttonHandler = () => {
    this.props.addTodo(this.state.nextTodo);
  }

  inputHandler = e => {
    this.setState({[e.target.name] : e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="App-intro">
          {this.props.todos ? this.props.todos.map((todo, i) => <li key={`Todo${i}`} onClick={() => this.props.toggleTodo(todo.value)} className={todo.completed ? 'strikethrough' : ''}>{todo.value}</li>) : null}
        </ul>
        <input type='text' placeholder='Add Todo' onChange={this.inputHandler} name="nextTodo" />
        <button onClick={this.buttonHandler}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { fetchTodos, addTodo, toggleTodo })(App);;

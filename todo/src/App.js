import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';
import { addTodo } from './actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addToDo = () => {
    const { todoText } = this.state;
    const newToDo = {
      id: this.props.todos.length +1,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newToDo);
    this.setState({ todoText: '' });
  };


  render() {
    return (
      <div className="App">
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoText={this.state.todoText}
          addTodo={this.addTodo}
        />
        <div className="App-intro">
          <Todos todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  };
};

export default connect(mapStateToProps, { addTodo })(App);
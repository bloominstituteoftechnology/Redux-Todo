import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import Todo from './components/Todo';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    console.log("In addTodo");
    const newTodo = {
        id: this.props.todos.length,
        completed: false,
        text: this.state.todoInput,
    };
    this.props.addTodo(newTodo);
    this.setState({ todoInput: '' });
    console.log("this is what was sent using addTodo:", newTodo);
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
return (
  <div className="App">
  <Todos todos={this.props.todos} />
  <TodoForm
    handleInput={this.handleInput}
    todoInput={this.state.todoInput}
    addTodo={this.addTodo}
    />
  </div>
);
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo })(App);

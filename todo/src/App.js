import React, { Component } from 'react';
import ToDo from './components/Todo'
import ToDoList from './components/ToDoList'
import { connect } from 'react-redux'
import { addToDo } from './actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  addToDo = () => {
    const { todo } = this.state;
    const newToDo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todo
    };
    this.props.addToDo(newToDo)
    this.setState({ todo: '' });
  }
  render() {
    return (
    <div>

      <ToDo
      handleChange={this.handleChange}
      todo={this.state.todo}
      addToDo={this.addToDo}
      />      
      <ToDoList todos={this.props.todos} />
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect (mapStateToProps, { addToDo }) (App)

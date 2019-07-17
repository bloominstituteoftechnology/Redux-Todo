import React from 'react';
import TodoForm from './TodoForm'
import Todos from './TodoList'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTodo = () => {
    const { todo } = this.state;
    const newTodo = {
      id: this.props.length + 1,
      completed: false,
      text: todo
    }

    this.props.addTodo(newTodo);
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <TodoForm /> 
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markDone, addTodo } from './actions';

const style = { textDecoration: 'line-through' };

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  handleSubmit = event => {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li
              style={todo.completed ? style : null} 
              key={todo.id} 
              onClick={() => this.props.markDone(todo.id) }
            >
              {todo.value}
            </li>
          ))}
        </ul>
        <div>
            <input value={this.state.userInput} type='text' placeholder='add a todo' onChange={this.handleSubmit} />
            <button onClick={() => this.props.addTodo(this.state.userInput, false)}>Add todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

export default connect(mapStateToProps, { markDone, addTodo })(App);

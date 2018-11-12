import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markDone, addTodo } from './actions';
import './App.css';


const style = { textDecoration: 'line-through' };

class App extends Component {
  constructor(){
    super();
    this.state={
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
      <div className="App">
      
        {this.props.todos.map((todo) => (
            <li
              style={todo.completed ? style : null} 
              key={todo.id} 
              onClick={() => this.props.markDone(todo.id) }
            >
              {todo.value}
            </li>
          ))}
          <div>
            <input type='text' value={this.state.userInput} placeholder='add' onChange={this.handleSubmit}/>
            <button onClick={() => this.props.addTodo(this.state.userInput, false)}>Add more</button>
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
export default connect(mapStateToProps, { markDone, addTodo})(App);

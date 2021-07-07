import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addtodo, toggletodo } from './actions';

const strikethrough = { textDecoration: "line-through" };

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    todoInput: '',
  }
}
 
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submit = () => {
        this.props.addtodo(this.state.todoInput);
        this.setState({
          todoInput: "",
        });
    };
    toggleComplete = event => {
        this.props.toggletodo(this.props.index);
    };
   
    
        render() {
          return (
              <div className="App">
                  <input
                  type='text'
                  placeholder="bobross"
                  onChange ={this.handleInputChange}
                  name="todoInput" 
                  />
                  <button onClick={() => this.submit()}>add </button>
                  <ul> {this.props.todos.map((todo, index) => (<div key={index}
                  onClick={() => this.props.toggletodo(todo.id)}
                  style={todo.complete ? strikethrough : null} >{todo.todo}</div>))}</ul>
                  </div>
          )}
  }
      const mapStateToProps = state => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { addtodo, toggletodo })(App);

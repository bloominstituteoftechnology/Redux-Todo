import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addtodo, toggletodo } from './actions';
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    todoInput: ''
  }
}
 
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submit = () => {
        this.props.addtodo(this.state.todoInput);
        this.setState({
          todoInput: ""
        });
    };
    textDec = () => {
      
    }
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
                  <ul> {this.props.todos.map((todo, index) => (<div onClick={this.toggleComplete}  key={index}>{todo}</div>))}</ul>
                  </div>
          )}
  }
      const mapStateToProps = state => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { addtodo, toggletodo })(App);

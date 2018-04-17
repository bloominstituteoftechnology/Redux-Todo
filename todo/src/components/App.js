import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todo: ""
    };
  }
  
  handleAddTodo = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmitTodo = () => {
    let {todo} = this.state;
    todo = this.state.newTodo;
    this.setState({ todo, newTodo: ""})
  }

  render() {
    console.log(this.state)
    return (
     <div>
       <div>
          <input type="text" 
                 placeholder="Add todo"
                 name="newTodo"
                 value={this.state.newTodo}
                 onChange={this.handleAddTodo}
          />

          <button onClick={() => this.props.add(this.state.newTodo)}>Add Todo</button>
          <button onClick={() => this.handleSubmitTodo}>Confirm</button>
        </div>
        {this.props.todo}
      </div>
    )
  }
};

const mapStateToProps = (todo) => {
  return {
    todo: todo
  };
}

export default connect(mapStateToProps, {add})(App);

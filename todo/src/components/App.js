import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from "../actions/index"
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state={
    newTodo: "anyh",
    todos: ""
  }
}
handleAddTodo = e =>{
  this.setState({[e.target.name]: e.target.value})
}
handleSubmitToDo = () => {
  let { value } = this.state;
  value = this.state.newTodo;
  this.setState({ value, newTodo: "" });
};

  render() {
   
    return (
      
   <div className="container">
   <div className ="header-style">
     <input className="input-style"
      name="newTodo"
       type="text"
       //value={this.state.newTodo}
        placeholder="Add todo"
        //onChange={this.handleAddTodo}
        value={this.state.newTodo}
        onChange={this.handleAddToDo}
        />
     <button onClick={this.handleSubmitToDo}>>Add Todo</button>
     <button onClick={() => {add(this.state.todo)}}>confirm</button>

     </div>
     <div className="todo-style">{this.props.todo}</div>
     
     </div>
    );
  }
}
 const mapStateToProps = (todo) =>{
  return {todo: todo};
}

export default connect(mapStateToProps, {add})(App);

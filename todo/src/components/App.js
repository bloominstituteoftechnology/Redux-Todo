import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from "../actions/index"

import TodoList from "./TodoList"
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state={
    newTodo: "",
  }
}
handleAddTodo = e =>{
  this.setState({[e.target.name]: e.target.value})
}
handleSubmitTodo = (value) => {
 
  this.setState({newTodo: ""});
  this.props.add(value)
  
  }
  // handleToggle = (value) =>{
  //   console.log(this.props)
  //   this.props.remove(value);
  // };
  

  render() {
    console.log(this.props.todo);
    return (
      
   <div className="container">
   <div className ="header-style">
     <input className="input-style"
      name="newTodo"
       type="text"
       value={this.state.newTodo}
        placeholder="Add todo"
        onChange={this.handleAddTodo}
        />
     <button  className="button-style" onClick={() =>  this.handleSubmitTodo(this.state.newTodo)}>Add Todo</button>

     </div>
     <TodoList todo={this.props.todo} handleToggle={this.handleToggle}/>
     
     </div>
    );
  }
}
 const mapStateToProps = (value) =>{
  return {todo: value}; 
}

export default connect(mapStateToProps, {add})(App);

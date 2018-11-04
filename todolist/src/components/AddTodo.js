import React, { Component } from "react";
import {addTodoAction} from '../actions/index';
import {connect} from 'react-redux'
import Todo from '../components/todo'


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  inputChangeHandler = e => {
    this.setState({ input: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    return (addTodoAction(this.state.input));
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.input}
            placeholder={"Add Todo..."}
          />
          <button>Add To-Do</button>
          <ul>{this.props.state.todoList.map(todo => {
            return (
            <Todo todoList={todo}/>

          
            )
          })}</ul>
        </form>
      </div>
    );
  }
}

 const mapStateToProps = state => ({
   todos: addTodoAction(state.todoList)

 })
 
export default connect(mapStateToProps)(AddTodo);

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
    (this.props.addTodoAction(this.state.input));
  };
  render() {
    return (
      <div>
        {console.log(this.props.state)}
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.input}
            placeholder={"Add Todo..."}
            />
          <button>Add To-Do</button>
          
          <ul>
        {this.props.state.map((todo,index) => <Todo key={index}todo={todo}/>)}

          
        </ul>
        </form>
      </div>
    );
  }
}

 const mapStateToProps = state => {
   return(
  {
   state,todoList: state.todoList

 }
  )
}
 
export default connect(mapStateToProps,{addTodoAction})(AddTodo);

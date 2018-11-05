import React, { Component } from 'react';
import Todo from './todo';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from './action';

class Todolist extends Component {

  completeHandler = (event, id) =>{
    event.preventDefault();
    this.props.completeTodo(id)
    if (event.target.classList.contains("strikethrough")) {
      event.target.classList.remove("strikethrough");
    } else {
      event.target.classList.add("strikethrough");
    }
  }

  deleteHandler = (event ,id) =>{
    event.preventDefault();
  this.props.deleteTodo(id);
  }

  render() {
    console.log(this.props.todos)
    return(
      <div>
      {this.props.todos.map(todo =>{
        return <Todo 
        key={todo.id} todo={todo} 
        complete={this.completeHandler}
        delete={this.deleteHandler}
        />
      })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  //console.log(state)
  return { todos: state.todos };
};

export default connect(mapStateToProps,{completeTodo, deleteTodo})(Todolist);
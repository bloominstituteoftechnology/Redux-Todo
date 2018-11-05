import React, { Component } from 'react';
import Todo from './todo';
import { connect } from 'react-redux';

class Todolist extends Component {

  render() {
    console.log(this.props.todos)
    return(
      <div>
      {this.props.todos.map(todo =>{
        return <Todo key={todo.id} todo={todo}/>
      })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  //console.log(state)
  return { todos: state.todos };
};

export default connect(mapStateToProps)(Todolist);
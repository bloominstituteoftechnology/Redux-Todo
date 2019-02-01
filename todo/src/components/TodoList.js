import React, { Component } from 'react';
import { toggleTodo, deleteTodo } from '../actions'
import { connect } from 'react-redux';

class TodoList extends Component {

  toggleComplete = (id) => {
    this.props.toggleTodo(id);
  }

  deleteComplete = (id) => {
    this.props.deleteTodo(id);
  }

  render(){
    return (
      <div>
        {this.props.todos.map((todo) => { 
          return (
            <div className='list-item'>
              <div 
                className={`${todo.completed.toString()} list-item-text`}
                key={todo.id} 
                id={todo.id} 
                onClick={() => this.toggleComplete(todo.id)}>
                {todo.value}
              </div>
              <button onClick={() => this.deleteComplete(todo.id)}>Delete</button>
            </div>)})}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
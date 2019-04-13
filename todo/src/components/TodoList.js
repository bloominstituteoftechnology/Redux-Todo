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
      <div className="todo-list">
        {this.props.todos.map((todo) => { 
          return (
            <div className='list-item'>
              <div className="list-item-text">
                <i class="fas fa-circle"></i>
                <div 
                  className={`${todo.completed.toString()} list-item-text`}
                  key={todo.id} 
                  id={todo.id} 
                  onClick={() => this.toggleComplete(todo.id)}>
                  {todo.value}
                </div>
              </div>
                <i class="fas fa-trash-alt" onClick={() => this.deleteComplete(todo.id)}></i>
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
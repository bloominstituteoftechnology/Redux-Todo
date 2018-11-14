import React from 'react';
import {connect} from 'react-redux';
import Todo from '../components/Todo';
import {toggleTodo, deleteTodo} from '../actions';

class TodoList extends React.Component {

  toggleHandler = id => {
    this.props.toggleTodo(id);
  }
  
  deleteItemHandler = id => {
    this.props.deleteTodo(id);
  }

  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        {this.props.todos.map(item => {
          return (
            <Todo 
            key={item.id}
            id={item.id}
            text={item.text}
            itemClick={() => {this.toggleHandler(item.id)}}
            deleteClick={() => {this.deleteItemHandler(item.id)}}
            style={{textDecoration: item.completed ? "line-through" : null}} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {todos: state.todos};
}

export default connect(mapStateToProps, {toggleTodo, deleteTodo})(TodoList);
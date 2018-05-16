import React from 'react';

import {addTodo, toggleTodo, deleteTodo} from '../actions';
import {connect} from 'react-redux';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo) => {
          if(todo.completed){
            return (
                <li key={todo.id} className="todo-completed">
                    <button className="white-btn green-btn fa fa-thumbs-up" onClick={ () => {props.toggleTodo(todo)} }></button>
                        {todo.task}
                    <div className="strike-line"></div>
                    <button className="white-btn trash-btn fa fa-trash-o" onClick={ () => {props.deleteTodo(todo)} }></button>
                </li>
            )
          }else {
            return (
                <li key={todo.id} >
                    <button className="white-btn gray-btn fa fa-thumbs-up" onClick={ () => {props.toggleTodo(todo)} }></button>
                        {todo.task}
                    <button className="white-btn trash-btn fa fa-trash-o" onClick={ () => {props.deleteTodo(todo)} }></button>

                </li>
            )
          }
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }
  
  export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(TodoList);

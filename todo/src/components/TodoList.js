import React from 'react';
import TodoItem from './Todo';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

// export default (props) => {



const TodoList = props => {

  handleClick = () => {
    this.props.onHeaderClick(this.props.value);
  } 

  return (
    <div>
      {props.todos.map(todo =>  (
        <div>
        <TodoItem 
          style={{todo.completed ? {textDecoration: 'line-through'} : null}}
          todo={todo} 
          key={todo.id} 
          index={todo.id}
          onClick={() => props.toggleComplete(todo.id)}
        />
      {todos}
      </div>
      ))}
      </div>
  );
};

const mapStateToProps = state => {
  console.log(`State from App`, state)
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { toggleComplete })(TodoList);
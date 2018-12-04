import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleStatus,
} from '../actions';

import TodoForm from './TodoForm';

const TodosWrapper = styled.div`
  .todo{
    display: flex;
    margin-bottom: 10px;
    
    .button {
      margin-right: 10px;
      border: 1px solid darkslategray;
      text-align: center;
      padding: 3px;
      line-height: 8px;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        background-color: gray;
        color: white;
      }
    }
  }
`;

class TodoList extends React.Component {
  render() { 
    return (
      <TodosWrapper>
        Todo App
        {
          this.props.todos.map((todo,id) => (
            <div className="todo">
              <div className="button" onClick={() => this.props.deleteTodo(id)}>x</div>
              <div
                className="todo--value"
                key={id}
                onClick={() => this.props.toggleStatus(id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  fontStyle: todo.completed ? 'italic' : 'normal'
                }}
              >
                {todo.value}
              </div>
            </div>
          ))
        }
        <TodoForm handleSubmit={this.props.addTodo}/>
      </TodosWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

export default connect(
  mapStateToProps,
  {
    addTodo,
    updateTodo,
    deleteTodo,
    toggleStatus,
  })(TodoList);

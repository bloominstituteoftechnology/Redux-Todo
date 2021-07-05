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
  background: gray;
  padding: 40px;
  max-width: 900px;
  min-height: 80vh;
  width: 98%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .todo{
    display: flex;
    margin-bottom: 10px;
    min-width: 300px;
    padding: 10px;
    border-radius: 10px;
    background-color: lightyellow;
    border: 1px solid darkslategray;

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
        <h1>Redux Todos</h1>
        {
          this.props.todos.map((todo,id) => (
            <div key={id} className="todo">
              <div className="button" onClick={() => this.props.deleteTodo(id)}>x</div>
              <div
                className="todo--value"
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

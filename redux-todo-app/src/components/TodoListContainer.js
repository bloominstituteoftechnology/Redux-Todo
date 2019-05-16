import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import { addTodo, completeTodo, deleteCompletedTodos, deleteTodo } from '../actions';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Main = styled.main`
  margin-top: 30px;
  h3 {
    font-size: 3rem;
    color: #222;
    text-shadow: 1px 1px rgba(77,74,165,.6);
  }
`;

const Section = styled.section`
  margin-top: 30px;
`;

const Article = styled.article`
  border: solid 1px rgb(77,74,165);
  border-bottom-color: #CCC;
  
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-bottom-width: 2px;
  }
  &:hover {
    box-shadow: .5px 2px 10px 1px rgba(0,0,0,.2);
    cursor: pointer;
  }
`;


// Handle Main container + data

class TodoListContainer extends React.Component {
  state = {
    todo: "",
    todoDescription: ""
  };

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

  addTodo = e => {
    e.preventDefault();
    this.props.addTodoHandler(this.state.todo, this.state.todoDescription);
    this.setState({ todo: "", todoDescription: "" });
  };

  completeTodo = (id) => {
    this.props.completeTodoHandle(id)
  }

  deleteCompletedTodos = () => {
    this.props.deleteCompletedTodosHandler();
  }

  deleteTodo = (id) => {
    this.props.deleteTodoHandler(id);
  }
 
  render() {
    return (
      <Main>
        <h3>{this.props.headingQuote[0]}</h3>
        <TodoForm
          addTodo={this.addTodo}
          handleOnChange={this.handleOnChange}
          todo={this.state.todo}
          todoDescription={this.state.todoDescription}
          deleteCompletedTodos={this.deleteCompletedTodos}
        />
        <Section>
          <Article>
            {this.props.todos.map((todo, index) => (
              <TodoItem key={index} todoItem={todo.item} id={todo.id} completeTodo={this.completeTodo} isTodoCompleted={todo.completed} deleteTodo={this.deleteTodo} />
            ))}
          </Article>
        </Section>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoList,
  headingQuote: state.headingQuote
});

const mapDispatchToProps = dispatch => ({
  
  // set up obj payload
  addTodoHandler: (todo, description) => {
    let newTodo = {
      item: todo,
      description: description,
      id: Date.now(),
      completed: false
    };
    dispatch(addTodo(newTodo));
  },

  completeTodoHandle: (todoId) => {
    dispatch(completeTodo(todoId));
  },

  deleteCompletedTodosHandler: () => {
    dispatch(deleteCompletedTodos());
  },

  deleteTodoHandler: (todoId) => {
    dispatch(deleteTodo(todoId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
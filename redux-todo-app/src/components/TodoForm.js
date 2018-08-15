import React from 'react';
import styled from "styled-components";

const Section = styled.section`
  margin-top: 10px;
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    label {
      font-size: 2.3rem;
      color: #222;
      text-shadow: .5px .5px rgba(77,74,165,.4);
      margin-top: 10px;
    }
  }
  button {
    background: rgba(77,74,165,.6);
    border: solid 1px gray;
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    font-size: 2rem;
    margin-top: 5px;
    &:hover {
      box-shadow: .5px 2px 10px 1px rgba(0,0,0,.2);
      cursor: pointer;
    }
    &:focus {
      outline-style: none;
    }
  }
`;

const TodoForm = props => {
  return (
    <Section>
      <form action="submit" onSubmit={props.addTodo}>
        <label htmlFor="todo">Todo:</label>
        <input
          type="text"
          id="todo"
          name="todo"
          onChange={props.handleOnChange}
          value={props.todo}
          required
        />
        <label htmlFor="todoDescription">Todo Description:</label>
        <textarea
          type="text"
          id="todoDescription"
          name="todoDescription"
          onChange={props.handleOnChange}
          value={props.todoDescription}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <button type="submit" onClick={props.deleteTodo}>Clear Todos</button>
    </Section>
  );
};

export default TodoForm;
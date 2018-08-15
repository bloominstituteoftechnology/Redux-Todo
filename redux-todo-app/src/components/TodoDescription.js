import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.main`
  margin-top: 15px;
  section {
    margin-top: 25px;
    p {
      margin-top: 10px;
    }
  }
`;

const TodoItemDescription = props => {
  let todo = props.todoList.filter(
    (item, index) => parseInt(props.match.params.id, 10) === index
  );
  return (
    <Main>
      <h1>Todo Item Details</h1>
      <section>
        <h2>Todo Item:</h2>
        <p>{todo[0].item}</p>
      </section>
      <section>
        <h2>Todo Description:</h2>
        <p>{todo[0].description}</p>
      </section>
      <section>
        <NavLink exact className="nav-item" activeClassName="active" to="/todos">
          Return
        </NavLink>
      </section>
    </Main>
  );
};

export default TodoItemDescription;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Section = styled.section`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(77,74,165);
  &:last-child {
    border-bottom: none;
  }
`;

const TodoItem = props => {
  return (
    <Section>
      <div>
        <p className={`${props.isTodoCompleted ? 'cross' : null}`} onClick={props.completeTodo}>{props.todoItem}</p>
      </div>
      <div>
        <NavLink className="nav-item" activeClassName="active" to={`/todos/${props.id}`}>
          View Description
        </NavLink>
      </div>
    </Section>
  );
};

export default TodoItem;
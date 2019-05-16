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
  .todo {
    width: 50%;
    text-align: left;
    word-break:break-all;
  }
  .link {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .delete {
    color: red;
    margin-left: 20px;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
      color: darkred;
    }
  }
`;

const TodoItem = props => {
  return (
    <Section>
      <div className={`todo ${props.isTodoCompleted ? 'cross' : null}`} onClick={() => props.completeTodo(props.id)}>
        <p>{props.todoItem}</p>
      </div>
      <div className="link">
        <NavLink className="nav-item" activeClassName="active" to={`/todos/${props.id}`}>
          View Description
        </NavLink>
        {props.id !== 2049 ? <p className="delete" onClick={() => props.deleteTodo(props.id)}>Delete</p> : null}
      </div>
    </Section>
  );
};

export default TodoItem;
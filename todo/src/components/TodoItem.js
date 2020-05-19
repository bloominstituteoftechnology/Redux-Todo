import React from "react";
import styled from "styled-components";

const TodoItem = props => {
  const TodoWrapper = styled.div`
    color: ${props.todo.completed ? `red` : `black`};
    text-decoration: ${props.todo.completed ? `line-through` : `normal`};
  `;

  const DeleteButton = styled.h5`
    color: red;
    text-align: right;
    font-size: 2rem;
  `;

  return (
    <TodoWrapper className="todo-task">
      <li onClick={() => props.toggleComplete(props.todo.id)}>
        {props.todo.value}
        <DeleteButton onClick={ev => props.handleDelete(ev, props.todo.id)}>
          X
        </DeleteButton>
      </li>
    </TodoWrapper>
  );
};

export default TodoItem;

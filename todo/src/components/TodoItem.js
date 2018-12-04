import React from "react";
import styled from "styled-components";

const TodoItem = props => {
  const TodoWrapper = styled.div`
    color: ${props.todo.completed ? `red` : `black`};
    text-decoration: ${props.todo.completed ? `line-through` : `normal`};
  `;

  return (
    <TodoWrapper className="todo-task">
      <li onClick={() => props.toggleComplete(props.todo.id)}>
        {props.todo.value}
      </li>
    </TodoWrapper>
  );
};

export default TodoItem;

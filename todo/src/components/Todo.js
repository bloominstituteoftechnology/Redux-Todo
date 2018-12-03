import React from "react";
import styled from "styled-components";

const Li = styled.li`
  padding: 10px 0;
  background: pink;
  color: white;
  width: 90%;
  color: #939;
  margin: auto;
`;

const Todo = ({ toggleCompleted, completed, text }) => {
  return (
    <Li
      onClick={toggleCompleted}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </Li>
  );
};

export default Todo;

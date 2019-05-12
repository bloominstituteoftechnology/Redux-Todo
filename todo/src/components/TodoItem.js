import React from "react";

// Individual todo items
const TodoItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    // strikethrough for complete todo, else no strikethrough for incomplete todo
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
);

export default TodoItem;

import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const strikethrough = { textDecoration: "line-through" };
const Todos = props => {
  // map the content of todos; give each item a style, onClick, and key props.
  return (
    <div>
      {props.todos.map(item => (
        <li
          style={item.completed ? strikethrough : null}
          onClick={() => props.toggleTodo(item.id)}
          key={item.id}
        >
          {item.text}
        </li>
      ))}
    </div>
  );
};

export default connect(null, { toggleTodo })(Todos);

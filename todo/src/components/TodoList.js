import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = props => {
  return props.array.map((element, index) => {
    return (
      <div  key={element.task} className="todoListItem">
     
        <Todo
          completed={element.completed}
          onClickMethod={props.methods}
          id={element.id}
          task={element.task}
        />
      </div>
    );
  });
};

export default TodoList;

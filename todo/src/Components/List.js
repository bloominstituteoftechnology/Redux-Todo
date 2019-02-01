import React from "react";

import Todo from "./Todo";

export default function List(props) {
  return (
    <div className="list">
      {props.list.map(entry => (
        <Todo entry={entry.todo} id={entry.todo} />
      ))}
    </div>
  );
}

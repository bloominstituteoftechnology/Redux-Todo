import React from "react";
import { addToDo, updateToDo } from "../actions";
import { connect } from "react-redux";

const ToDo = props => (
  <div className="ToDo">
    <div
      className="ToDo-item"
      style={
        props.completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
      onClick={() => {
        props.updateToDo(props);
      }}
    >
      {props.value}
    </div>
  </div>
);

export default connect(null, { removeToDo, updateToDo })(ToDo);

import React from "react";
import { connect } from "react-redux";
import { checkItem } from "../Actions";

function Todo(props) {
  const clickHandler = () => {
    props.checkItem(props.id);
  };

  if (props.complete) {
    return (
      <li className="completed list-item" onClick={clickHandler}>
        {props.entry}
      </li>
    );
  } else {
    return (
      <li className="incomplete list-item" onClick={clickHandler}>
        {props.entry}
      </li>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  { checkItem }
)(Todo);

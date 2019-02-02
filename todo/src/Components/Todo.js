import React from "react";
import { connect } from "react-redux";
import { checkItem } from "../Actions";

function Todo(props) {
  const clickHandler = () => {
    props.checkItem(props.id);
  };

  if (props.complete) {
    return (
      <div className="completed" onClick={clickHandler}>
        {props.entry}
      </div>
    );
  } else {
    return (
      <div className="incomplete" onClick={clickHandler}>
        {props.entry}
      </div>
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

import React from "react";
import { connect } from "react-redux";
import { checkItem } from "../Actions";

function Todo(props) {
  const clickHandler = () => {
    props.checkItem(props.id);
  };

  return (
    <div className="entry" onClick={clickHandler}>
      {props.entry}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  { checkItem }
)(Todo);

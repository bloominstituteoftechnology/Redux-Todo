import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../Actions";

function ClearButton(props) {
  const clickHandler = e => {
    e.preventDefault();
    props.removeItem();
  };

  return <button onClick={clickHandler}>Clear Completed</button>;
}

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  { removeItem }
)(ClearButton);

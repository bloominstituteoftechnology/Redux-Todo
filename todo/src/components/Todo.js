import React from "react";
import { connect } from "react-redux";
import {} from "../actions/index.js";

class ToDo extends React.Component {
  render() {
    return <p>Yup</p>;
  }
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, {  })(ToDo);

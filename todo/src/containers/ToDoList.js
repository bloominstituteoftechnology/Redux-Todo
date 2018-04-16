import React, { Component } from "react";
import { connect } from "react-redux";
import { selectToDo } from "../actions";
import { bindActionCreators } from "redux";

class ToDoList extends Component {
  renderList() {
    return this.props.movies.map((item, i) => {
      return (
        <li onClick={() => this.props.strikeItem(item)} key={i}>
          {(item.value, item.completed)}
        </li>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectToDo: selectToDo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

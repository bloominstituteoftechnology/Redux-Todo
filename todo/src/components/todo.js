import React, { Component } from "react";

import { connect } from "react-redux";

import { toDoCreate, toDoComplete, toDoDelete } from "../actions";

function Task(props) {
  let classText = "to-do-task";
  if (props.status) {
    classText += " to-do-task_complete";
  }
  return (
    <li
      className={classText}
      onClick={props.onClick}
      children={props.description}
      data-id={props.id}
    />
  );
}

class ToDo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      inputText: ""
    };
  }
  render() {
    return (
      <div className="to-do">
        <form onSubmit={this.submitHandler}>
          <input value={this.state.inputText} onChange={this.changeHandler} />
        </form>
        <ul className="to-do-list">
          {this.props.toDos.map(task => (
            <Task
              key={task.id}
              status={task.complete}
              description={task.description}
              id={task.id}
              onClick={this.clickHandler}
            />
          ))}
        </ul>
      </div>
    );
  }

  submitHandler = eventSubmit => {
    eventSubmit.preventDefault();
    let taskText = this.state.inputText;
    this.setState({ inputText: "" });
    this.props.toDoCreate(taskText);
  };
  changeHandler = eventChange => {
    this.setState({
      inputText: eventChange.target.value
    });
  };

  clickHandler = eventClick => {
    this.props.toDoComplete(Number(eventClick.target.dataset.id));
  };
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  {
    toDoCreate,
    toDoComplete,
    toDoDelete
  }
)(ToDo);

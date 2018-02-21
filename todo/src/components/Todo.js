import React from "react";
import { connect } from "react-redux";
import { add_todo } from "../actions/index.js";

class ToDo extends React.Component {
  state = {
    key: this.props.todos.length,
    todo: "",
    completed: false
  };

  render() {
      console.log("prop.todos length" , this.props.todos.length);
      console.log("state.key number", this.state.key)
    return (
      <div>
        <h1> To Do List </h1>
        <ul>
          {this.props.todos.map((item, index) => {
            return (
              <div key={item.key}>
                <li> {item.todo} </li>
              </div>
            );
          })}
        </ul>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          placeholder="Enter ToDo Here"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Add To Do to the List</button>
      </div>
    );
  }
  getKey = () => {
    const key = this.props.todos.length + 1;
    this.setState({ key: key });
  };

  handleInputChange = event => {
    const todo = event.target.value;
    this.setState({ todo: todo });
  };
  handleClick = () => {
    this.getKey();
    this.props.add_todo(this.state);
    this.setState({ todo: "" });
  };
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { add_todo })(ToDo);

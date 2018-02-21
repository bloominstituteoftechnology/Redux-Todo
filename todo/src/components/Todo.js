import React from "react";
import { connect } from "react-redux";
import { add_todo, update_completed } from "../actions/index.js";

class ToDo extends React.Component {
  state = {
    todo: "",
  };

  render() {
    return (
      <div>
        <h1> To Do List </h1>
        <ul>
          {this.props.todos.map((item, index) => {
            return (
              <div key={item.id}>
                <li onClick={() => this.props.update_completed(item)}> {item.todo} </li>
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
        <button onClick={this.handleAddClick}>Add To Do to the List</button>
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
  handleAddClick = () => {
    this.getKey();
    this.props.add_todo(this.state.todo);
    this.setState({ todo: "" });
  };
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { add_todo, update_completed })(ToDo);

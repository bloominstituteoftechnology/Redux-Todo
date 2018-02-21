import React, { Component } from "react";
import { connect } from "react-redux";
import { add_todo, completed } from "../actions";

class App extends Component {
  state = {
    todo: "",
    completed: false
  };

  render() {
    console.log("Props: ", this.props);
    return (
      <div>
        <h1> To Do List </h1>
        <ul>
          {/* I know index is bad practive, couldn't get state to keep track of keys */}
          {this.props.todos.map((item, index) => {
            return item.completed ? null : (
              <div style={{ display: "flex", flexFlow: "row" }} key={index}>
                <li> {item.todo} </li>
                <button
                  style={{ marginLeft: "5px" }}
                  onClick={() => this.props.completed(this.state, index)}
                >
                  
                  delete
                </button>
              </div>
            );
          })}
        </ul>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>
          Add To Do to the List
        </button>
      </div>
    );
  }

  handleClick = () => {
    this.props.add_todo(this.state);
    this.setState({todo:''})
  }
  
  handleInputChange = event => {
    const todo = event.target.value;
    this.setState({ todo: todo });
  };
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { add_todo, completed })(App);

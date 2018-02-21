import React from "react";
import { connect } from "react-redux";
import {} from "../actions/index.js";

class ToDo extends React.Component {
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
              {this.props.todos.map((item, index) => {
                return
                  <div>
                    <li> {item.todo} </li>
                  </div>
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
      handleInputChange = event => {
        const todo = event.target.value;
        this.setState({ todo: todo });
      };
      handleClick = () => {
        this.setState({ todo: "" });
      };
}


const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, {  })(ToDo);

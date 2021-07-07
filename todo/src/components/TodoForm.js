import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleTaskChange = e => {
    this.setState({ task: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault()
    const newTask = { task: this.state.task, completed: false, id: Date.now() };
    this.props.addTodo(newTask);
    this.setState({ task: '' });
    console.log("addTodo: ",addTodo)
  };

  render() {
    return (
      <div>
         <form onSubmit={this.submitTodo}>
            <input type="text" placeholder="new task" value={this.state.task}
                onChange={this.handleTaskChange}/>
            <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(TodoForm);

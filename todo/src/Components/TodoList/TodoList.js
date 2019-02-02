import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../actions/actions";
import "./TodoList.css";
import Todo from "../Todo/Todo";

class TodoList extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Add todo
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.todoText,
      completed: false
    });
    this.setState({ todoText: "" });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => {
            return <Todo key={i} index={i} {...todo} />;
          })}
        </ul>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

//maps whatever the state in the store you want to props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoList);

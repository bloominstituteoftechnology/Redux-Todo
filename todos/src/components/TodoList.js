import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";
import "../App.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            value={this.state.inputText}
            name="inputText"
            placeholder="What would you like to do?"
            onChange={this.changeHandler}
          />
          <button>Submit</button>
        </form>
        <ul>
          {this.props.todos.map(todo => (
            <li>{todo.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {addTodo}
)(TodoList);

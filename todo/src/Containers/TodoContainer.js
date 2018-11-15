import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";
import Todos from '../components/Todos';

class TodoContainer extends React.Component {
  state = {
    data: ""
  };

  inputHandler = e => this.setState({ data: e.target.value });

  addHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.data);
  };

  
  toggleTodo = index => {
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <Todos
        inputHandler={this.inputHandler}
        placeholder="...add todo"
        toggleTodo={this.toggleTodo}
        todos={this.props.todos}
        data={this.state.data}
        addHandler={this.addHandler}
      />
    );
  }
}
  

const mapStateToProps = state => ({ todos: state.todos });

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoContainer);

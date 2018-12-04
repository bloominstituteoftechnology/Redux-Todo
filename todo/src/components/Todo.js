import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
  };

  handleToggleTodo = index => {
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <div className="todoContainer">
        <div className="list">
          {this.props.todos.map((item, index) => (
            <h4 onClick={() => this.handleToggleTodo(index)} key={item.todo}>
              {item.todo}
            </h4>
          ))}
        </div>

        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChanges}
          placeholder="Add Todo"
          autoComplete="off"
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todo);

// const mapDispatchToProps = dispatch => ({
//     onIncrement: id => dispatch(increment(id)),
//     onDecrement: id => dispatch(decrement(id))
//   });

//   const mapStateToProps = state => ({
//     data: state
//   });

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(App);

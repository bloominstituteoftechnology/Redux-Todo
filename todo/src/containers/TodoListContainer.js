import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/todoList/TodoList";
import TodoInput from "../components/todoList/TodoInput";
import { addTodo, toggleTodo } from "../store/actions";

class TodoListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInputText: ""
    };
  }

  onChange = ev => {
    ev.preventDefault();
    this.setState({
      todoInputText: ev.target.value
    });
  };

  addNewTodo = () => {
    this.props.addTodoOnProps(this.state.todoInputText);
    this.setState({
      todoInputText: ""
    });
  };

  toggleCompleted = index => {
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <div>
        <TodoInput
          addTodo={this.addNewTodo}
          inputText={this.state.todoInputText}
          onInputChange={this.onChange}
        />
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todos={this.props.todosOnProps}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todosOnProps: state.todos
});

export default connect(
  mapStateToProps,
  { addTodoOnProps: addTodo, toggleTodo }
)(TodoListContainer);

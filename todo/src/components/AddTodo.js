import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from "../actions/index.js";

class AddTodo extends Component {
constructor (props) {
  super(props);
  this.state = {
  todolist: ""
  };
};

handleTodoList = e => {
  this.setState({todolist:e.target.value});
};

addTodo = () => {
  this.props.createTodo(this.state.todolist);
  this.setState({todolist: ""});
};

render = () => {
  return (
    <div>
      <input 
        placeholder="Todo List" 
        type="text" 
        value={this.state.todolist}
        onChange={this.handleTodoList}
      />
      <button onClick={this.addTodo}>Add Todo</button>

      <ul>
        {this.props.todos.map(todo => {
          return(
            <li key={todo.value}>{todo.value}</li>
          );
        })};
      </ul>

    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, {createTodo})(AddTodo);

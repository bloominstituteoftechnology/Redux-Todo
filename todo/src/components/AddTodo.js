import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from "../actions";

export default class AddTodo extends Component {
constructor (props) {
super(props);
this.state = {
  todolist: ""
}
}


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
        onChange={this.handleTodoListChange}
      />
      <button onClick={this.addTodo}>Add Todo</button>
    </div>
  )
}
}

// export default connect(null, {createTodo})(AddTodoList);
import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, delTodo, toggleTodo, filterTodo } from '../actions/index';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
    }
  }

  handleOnChange = (e) => {
    this.setState({ textInput: e.target.value });
  }

  render() {
      const { addTodo, delTodo, toggleTodo, filterTodo, todos } = this.props;
      console.log(todos);
      return (
        <div>
          <input onChange={this.handleOnChange} type="text" placeholder="add todo" />
          <button onClick={() => addTodo(this.state.textInput)}>Add</button>
          <button onClick={filterTodo}>Filter</button>

          { 
           todos.length !== 0
            ? todos.map(todo => {
                return (
                  <ul>
                    <li style={ {
                      textDecoration: todo.isCompleted ? 'line-through' : 'none'
                    } }>
                      {todo.text}
                    </li>
                    <button onClick={() => delTodo(todo.id)}>Delete</button>
                    <button onClick={() => toggleTodo(todo.id)}>Done</button>
                  </ul>
                )
              })
            : <p>The list is now empty</p>
          }
        </div>
      );
  }
}

const mapStateToProps = (todos) => ({
  todos
})

export default connect(mapStateToProps, { addTodo, delTodo, toggleTodo, filterTodo })(TodoList);
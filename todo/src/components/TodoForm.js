import React from 'react';
import {connect} from 'react-redux';
import {addTodo, handleInput, deleteCompleted} from '../actions';

class TodoForm extends React.Component {
  inputHandler =  e => {
    this.props.handleInput(e.target.value)
  }

  addTodoHandler = e => {
    e.preventDefault();
    this.props.addTodo()
  }

  deleteTodoHandler = e => {
    e.preventDefault();
    this.props.deleteCompleted();
  }

  render() { 
    return (
      <div className="form-container">
        <form onSubmit={this.addTodoHandler}>
          <input 
          type="text"
          name='text'
          value={this.props.text}
          onChange={this.inputHandler}  />
        </form>
        <button onClick={this.addTodoHandler} className="add-button">Add Todo</button>
        <button onClick={this.deleteTodoHandler} className="delete-button">DeleteCompleted</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    text: state.text
  }
}

export default connect(mapStateToProps,{addTodo, handleInput, deleteCompleted})(TodoForm);
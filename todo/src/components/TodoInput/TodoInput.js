import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateNewInput } from '../../actions';
import './TodoInput.css';

class TodoInput extends Component {

  handleInput = (event) => {
    
    event.preventDefault();

    this.props.updateNewInput(event.target.value);

  }

  addNewTodo = (event) => {

    event.preventDefault();

    this.props.addTodo(this.props.newInput);
    this.props.updateNewInput("");

  }

  render() {

    return (
      <div className="TodoInput">
        <form onSubmit={ (event) => this.addNewTodo(event) }>
         <input type="text" 
                placeholder="Enter your plan here ..." 
                value={ this.props.newInput }
                className="TodoInput__input" 
                onChange={ (event) => this.handleInput(event) } />
        </form>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    newInput: state.newInput,
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo, updateNewInput })(TodoInput);
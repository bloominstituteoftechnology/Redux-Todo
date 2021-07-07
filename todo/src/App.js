import React from "react";
import { connect } from 'react-redux';
import './App.css';
import {input_Value, toggle_Completed, submit_Todo, remove_Todo} from './actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {

  handleInput = event => {
    this.props.input_Value(event.target.value);
  }

  //handle click of 'Add Todo' button
  handleAddTodo = event => {
    event.preventDefault();
    if (this.props.valueOnProps){
      this.props.submit_Todo({  value: this.props.valueOnProps,
                                completed: false})
    }
  }

  // handleRemoveTodos = event =>{
  //   event.preventDefault();
  //   this.props.remove_Todos();
  // }
  handleRemoveTodo = (event, id) => {
    event.preventDefault();
    this.props.remove_Todo(id);
  }

  //handle click of each todo item
  handleTodoClick = (event,id) => {
    event.preventDefault();
    this.props.toggle_Completed(id);
  }

  render() {
    // const { todos } = this.props;
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoForm handleInput={this.handleInput}
                  handleAddTodo={this.handleAddTodo}
                  value={this.props.valueOnProps}/>
        {/* {console.log(this.props.todosOnProps)} */}
        <TodoList todoList={ this.props.todosOnProps}
                  handleTodoClick={this.handleTodoClick} 
                  handleRemoveTodo={this.handleRemoveTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todosOnProps: state.todos,
      valueOnProps: state.value,
  };
};

export default connect(mapStateToProps, 
                      {input_Value, 
                       toggle_Completed, 
                       submit_Todo,
                       remove_Todo})(App);

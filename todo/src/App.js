import React from "react";
import { connect } from 'react-redux';
import './App.css';
import {input_Value, toggle_Completed, submit_Todo} from './actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos:this.props.todoOnProps,
  //     value:"",
  //     completed: false
  //   };
  // }

  handleInput = event => {
    this.props.input_Value(event.target.value);
    // console.log(this.props.)
    // this.setState({
    //   value: event.target.value
    // });
  }

  //handle click of 'Add Todo' button
  handleAddTodo = event => {
    event.preventDefault();
    if (this.props.valueOnProps){
      this.props.submit_Todo({  value: this.props.valueOnProps,
                                completed: false})
    }
  }

  //handle click of each todo item
  handleTodoClick = (event,todoIndex) => {
    event.preventDefault();
    // console.log(todoIndex);
    // let tempTodoList = this.state.todo.splice();
    // let tempTodoItem = tempTodoList.find( todoObject =>{
    //   return todoObject.task ===
    // });
    // console.log(tempTodoItem);

    this.props.toggle_Completed(todoIndex);
    document.getElementsByClassName('todoItem').classList.add("strikethrough");
    
    // if (event.target.completed === false){
    //   this.setState({ 
    //     event.target.completed: true;
    //   })
    // }

  }

  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoForm handleInput={this.handleInput}
                  handleAddTodo={this.handleAddTodo}
                  value={this.props.valueOnProps} />
        <TodoList todoList={ this.props.todosOnProps}
                  handleTodoClick={this.handleTodoClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todosOnProps: state.todos,
      valueOnProps: state.value,
      completedOnProps: state.completed
  };
};

export default connect(mapStateToProps, {input_Value, toggle_Completed, submit_Todo})(App);

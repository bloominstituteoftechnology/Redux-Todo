import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo} from '../actions/index.js';

import TodoList from '../components/TodoList.js'

 class TodoContainer extends React.Component {
   state = {
     inputText: '',

   };

   handleChange= event => this.setState({
     inputText: event.target.value
   });
    addTodo = event => {
      event.preventDefault();
      this.props.addTodo(this.state.inputText)
    }


  toggleTodo = index => {
    this.props.toggleTodo(index);
  };

    render() {
    return (
      <TodoList
        handleChange={this.handleChange}
        inputText={this.state.inputText}
        toggleTodo={this.toggleTodo}
        todoList={this.props.todos}
        addTodo={this.addTodo}
      />
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos
});






 export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoContainer);

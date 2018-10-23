import React from 'react';
import { ADD_TODO, TOGGLE_TODO, GET_TODOS } from '../actions';
import { connect } from 'react-redux';

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        };
    }

    handleTodoComplete = todoId => {
        this.props.toggleTodo(todoId);
      };
    
      handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      addTodoHandler = e => {
        const { text } = this.state;
        const newTodo = {
          text,
          completed: false,
          id: this.props.todos ? this.props.todos.length + text : 0 + text
        };
        this.props.addTodo(newTodo);
        this.setState({
          inputText: ''
        });
      };

      
}
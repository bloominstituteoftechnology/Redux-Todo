import React, { Component } from 'react';


export default class ToDoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: []
      };
    }
  
    componentDidMount() {
      
    }
  
    render() {
      return (
        <form className="TODO_FORM">
            Title: <input type="text" name="toDoItem" />
            Completed: <input type="checkbox" name="completed" />
            <input type="submit" value = "Add" />
        </form>
      );
    }
}
  
  
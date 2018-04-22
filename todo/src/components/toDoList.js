import React, { Component } from 'react';
import '../App.css';

export default class toDoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toDos: []
      };
    }
  
    componentDidMount() {
          this.setState(() => ({ toDos: this.props.toDos }));
    }
  
    render() {
      return (
        <div className="APP__BODY-LIST">
          {this.state.toDos.map(todo => (
            <ToDoInfo key={todo.id} todo={todo} />
          ))}
        </div>
      );
    }
  }
  
  function ToDoInfo({ todo }) {
    console.log(todo);
    const { text, completed, id } = todo;
    return (
        <div className='APP__BODY'>
        {text}<input className="APP__BODY-COMPLETE" type = 'checkbox' value={todo.completed} /><button>-</button>
        </div>
    );
  };
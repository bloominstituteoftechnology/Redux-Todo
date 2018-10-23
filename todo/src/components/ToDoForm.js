
import React from 'react';
import { addToDo } from '../actions';



//<form onSubmit={(event)=>{this.methodName(event)}}>
const ToDoForm = props => {
    addToDo = () => {
        this.props.addToDo()
    };
    return (
        <div>
          <form onSubmit={props.addToDo}> 
          <input
            type="text"
            value={props.value}
          />
          <button type="submit" onClick={props.addToDo}>
            Add Item
          </button>
          <button>
          Clear Completed
          </button>
        </form>
      </div>
    );
  };

  export default ToDoForm;
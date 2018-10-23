import React from 'react';
import { updateToDoItem } from '../actions';

const Todo = props => {
let classes = "todoItem";
  if(props.completed) {
    classes += " done"
 }
 updateToDoItem  = () => {
    this.props.updateToDoItem();
};
    return (
      <div>
        <p onClick={this.updateToDoItem} className={classes} id={props.id}>{props.value}</p>
        
      </div>
    );
}


export default Todo;


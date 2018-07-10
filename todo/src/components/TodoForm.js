import React from 'react';

const TodoForm = props => {
  return (
    <form className="todo-form">
      <input className="todo-input"
             type="text"
             placeholder="Add new todo"
             value={props.displayText}
             onChange={props.changeEvent} />
      <button className="todo-add-btn"
              type="submit"
              onClick={(e) => { e.preventDefault()
                                props.addNewTodo(props.newTodo)}} >Add</button>
      <button className="todo-clear-btn"
              onClick={(e) => { e.preventDefault()
                                props.clearTodo()}}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;

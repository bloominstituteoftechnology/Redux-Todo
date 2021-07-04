import React from 'react';


const TodoForm = (props) => {
  return (
    <form onSubmit={props.add}>
      <input placeholder="...todo item" onChange={props.itemAdd} value={props.value}/>
      <button type='submit'>Add ToDo</button>
    </form>
  )
}

export default TodoForm;

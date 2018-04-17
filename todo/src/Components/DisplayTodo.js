import React from 'react';
import './DisplayTodo.css';

export default (props) => {
  let displayItems = null;
  if (props.todos.length > 0){
    displayItems = (
      <ul className='listItems'>
        {props.todos.map((todo, i) => {
          return <li key={todo+i}>{todo}</li>
        })}
      </ul>
    )
  }
  return (
    <div className='listContainer'>
      {displayItems}
    </div>
  )
}

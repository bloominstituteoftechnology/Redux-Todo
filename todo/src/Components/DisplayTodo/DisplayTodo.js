import React from 'react';
import './DisplayTodo.css';
import {completeToDo} from '../../Actions/Actions'
import {store} from '../../index'
export default (props) => {
  let displayItems = null;
  if (props.todos.length > 0){
    displayItems = (
      <ul className='listItems'>
        {props.todos.map((listObj, i) => {
          let styles = 'listItem';
          if (listObj.complete === true) {
            styles += ' completed';
          }
          return <li className={styles} key={listObj.todo+i} onClick={(e) => store.dispatch(completeToDo(e))} >{listObj.todo}</li>
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

import React from 'react'

const Todos = (props) => {
  return (
    <div>
      <h2>Todos Component</h2>
      <ol>
        {props.todos.map(todo =>{
          return (
            <li>{todo}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default Todos

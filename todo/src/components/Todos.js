import React from 'react'

const Todos = (props) => {
  return (
    <div>
      <h2>Todos Component</h2>
      <ul>
        {props.todos.map((todo, index) =>{
          return (
            <li key={`todo-${index}`}>{todo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos

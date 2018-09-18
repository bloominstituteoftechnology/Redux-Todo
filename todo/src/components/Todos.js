import React from 'react'

const Todos = (props) => {
  const items = props.todos.map(item => item.value)
  return (
    <div>
      <h2>Todos Component</h2>
      <ul>
        { 
          items.map((todo, index)  =>{
            return (
              <li
                key={`todo-${index}`}
                onClick={() => props.toggleTodo(index)}
              >
                {todo}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todos

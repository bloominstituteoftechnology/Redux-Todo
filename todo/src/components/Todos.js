import React from 'react'

const Todos = (props) => {
  const items = props.todos.map(item => item)
  return (
    <div>
      <h2>Todos Component</h2>
      <ul>
        { 
          items.map((todo)  =>{
            return (
              <li
                key={`todo-${todo.id}`}
                onClick={() => props.toggleTodo(todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
              >
                {todo.value}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todos

import React from "react"

//renders each todo item
const Todo = (props) => {
   return(
      <div>
         {props.todo.task}
      </div>
   )
}

export default Todo
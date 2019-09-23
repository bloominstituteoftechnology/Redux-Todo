import React from "react"

//renders each todo item
const Todo = (props) => {
   return(
      <div>
         <span onClick={props.toggle}>{props.todo.task}</span>
      </div>
   )
}

export default Todo
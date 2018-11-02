import React from "react"

const TodoForm = () => {
   return(
      <div>
         <input 
               // value={props.text} 
                placeholder="Enter Todo"
                maxLength="50"
               //  onChange={props.input}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        console.log("Enter")
                    }
                }} 
          />
          <button onClick={() => console.log("clicked")}>Add Todo</button>
          <button onClick={() => console.log("clicked")}>Clear Completed</button>
      </div>
   )
}

export default TodoForm
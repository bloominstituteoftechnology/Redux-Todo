import React from "react"
import styled from "styled-components";

const Task = styled.ul`
   ${props => props.complete ? `text-decoration: line-through` : null}
`;
const Item = (props) => {
   return(
      <div>
         <Task onClick={props.toggle} complete={props.completed}>{props.todo.task}</Task>
      </div>
   )
}
 export default Item
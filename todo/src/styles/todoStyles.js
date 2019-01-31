import styled from "styled-components"

export const TodoWrapper = styled.li`
  ${props =>
    props.completed ? `text-decoration: line-through` : `text-decoration: none`}
`

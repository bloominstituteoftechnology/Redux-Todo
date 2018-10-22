import styled from 'styled-components'

export const List = styled.ul`
  margin: 10px 0;
  padding: 0;
`

export const Item = styled.li`
  text-decoration: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
  cursor: pointer;
  list-style: none;
  font-size: 18px;
  margin: 10px 0;
`


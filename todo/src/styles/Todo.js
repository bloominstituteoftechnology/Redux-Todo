import styled from 'styled-components'

export const List = styled.ul`
  margin: 10px 0;
  padding: 0;
`

export const Item = styled.li`
  list-style: none;
  font-size: 18px;
  margin: 10px 0;
  padding: 10px;
  border: 1px dotted black;
  position: relative;
`

export const ItemText = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  cursor: pointer;
`

export const Close = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`

import styled from 'styled-components'

export const Item = styled.p`
  text-decoration: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`

import styled, {css} from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid  #ff6347;
  color:  #ff6347;
  margin: 0 1em;
  padding: 0.7em 1em;
  cursor:pointer;


  ${props => props.primary && css`
    background:  #ff6347;
    color: white;
  `}
`;
export default Button;
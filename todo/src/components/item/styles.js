import styled from 'styled-components';

export const StyledItem = styled.li`
  font-size: 2rem;
  color: rgb(216, 222, 232);
  ${(props) => {
    if (props.completed === 'true') {
      return `
        text-decoration: line-through;
        color: rgb(149, 199, 153);
        }
      `;
    }
  }};
  padding: 5px 10px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background: rgb(41, 41, 41);
  }
`;

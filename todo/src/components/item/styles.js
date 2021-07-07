import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background: rgb(41, 41, 41);
  }
`;

export const StyledItem = styled.li`
  font-size: 2rem;
  color: rgb(216, 222, 232);
  list-style-type: circle;
  ${(props) => {
    if (props.completed === 'true') {
      return `
        text-decoration: line-through;
        color: rgb(149, 199, 153);
        list-style-type: disc;
      `;
    }
  }};
  ${(props) => {
    if (props.important === 'true') {
      return `
        list-style-type: none;
        ::before {
          content: "!";
          margin-right: 19.35px;
          color: rgb(241, 94, 105);
          font-weight: 900;
          text-decoration: none;
        }
        }
      `;
    }
  }};
  padding: 5px 10px;
`;

export const ImportantButton = styled.div`
  color: rgb(52, 61, 69);
  font-size: 2rem;
  font-weight: 900;
  background: rgb(100, 115, 125);
  padding: 2px 10px;
  border-radius: 10px;
  ${(props) => {
    if (props.important === 'true') {
      return `
          color: rgb(241, 94, 105);
      `;
    }
  }};
  :hover {
    cursor: pointer;
    background: rgb(167, 173, 185);
  }
`;

// const importantMarkers = {}
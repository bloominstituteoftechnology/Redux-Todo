import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: #f1f2f6;
  width: 25%;
  padding: 3rem;
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <h1>Do Work</h1>
      </StyledSidebar>
    );
  }
}

export default Sidebar;

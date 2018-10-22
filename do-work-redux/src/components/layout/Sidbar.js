import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 20%;
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

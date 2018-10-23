import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTasks } from '../../actions';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: #f1f2f6;
  width: 25%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;

  h1 {
    color: #57606f;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 6rem;
    text-align: center;
    width: 100%;
  }
  .stats span {
    color: #1e90ff;
  }

  .clear-btn {
    color: #fafafa;
    background: #ff4757;
    border: transparent;
    border-radius: 5px;
    font-size: inherit;
    padding: 1rem;
    transition: all 200ms;
    cursor: pointer;

    &:hover {
      background: #fc747f;
    }
  }
`;

class Sidebar extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.deleteTasks();
  };
  render() {
    const { tasks } = this.props;
    return (
      <StyledSidebar>
        <h1>Do Work</h1>
        {!tasks ? (
          <p>Loading stats</p>
        ) : (
          <div className="stats">
            <span>{tasks.length}</span> Tasks
          </div>
        )}
        <button onClick={this.handleClick} className="clear-btn">
          Clear Completed
        </button>
      </StyledSidebar>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(
  mapStateToProps,
  { deleteTasks }
)(Sidebar);

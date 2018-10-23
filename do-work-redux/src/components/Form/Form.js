import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input,
  button {
    border: transparent;
    font-size: inherit;
    padding: 1rem;
  }

  input {
    width: 80%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: all 50ms;
    outline-width: 0px;

    &:focus {
      outline-color: #1e90ff;
      outline-width: 2px;
      outline-offset: -2px;
      outline-style: solid;
    }
  }

  button {
    width: 20%;
    background: #1e90ff;
    color: #fafafa;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 200ms;
    cursor: pointer;

    &:hover {
      background: #6fb7ff;
    }
  }
`;

class Form extends Component {
  state = {
    formInput: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      task: this.state.formInput,
      completed: false
    };
    this.props.addTask(task);
    this.setState({ formInput: '' });
  };

  render() {
    const { formInput } = this.state;
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={formInput}
          onChange={this.handleInputChange}
          name="formInput"
        />
        <button type="submit">
          <i className="fas fa-plus" />
        </button>
      </StyledForm>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Form);

import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
`;

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    this.setState({inputText: ''});
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="add a todo"
          onChange={this.handleChange}
          name="inputText"
          value={this.state.inputText}
        />
      </StyledForm>
    );
  }
}

export default TodoForm;

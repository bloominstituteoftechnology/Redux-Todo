import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  min-width: 300px;
  padding: 10px;
  border-radius: 10px;
`;

class TodoForm extends React.Component {
  state = {
    text: '',
    checked: false,
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = e => {
    console.log('submitted')
    e.preventDefault();
    this.props.handleSubmit({
      value: this.state.text,
      completed: this.state.checked
    });
    this.setState({
      text: '',
      checked: false,
    })
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.onSubmit}>
          <StyledInput
            value={this.state.text}
            onChange={this.onChange} type="text"
            placeholder="Add new todo ..."
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
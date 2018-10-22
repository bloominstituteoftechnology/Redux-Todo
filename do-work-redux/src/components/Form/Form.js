import React, { Component } from 'react';

class Form extends Component {
  state = {
    formInput: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { formInput } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Add a new task..."
          value={formInput}
          onChange={this.handleInputChange}
          name="formInput"
        />
        <button>
          <i className="fas fa-plus" />
        </button>
      </form>
    );
  }
}

export default Form;

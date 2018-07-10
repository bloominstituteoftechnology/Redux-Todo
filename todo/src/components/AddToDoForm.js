import React from 'react';

class AddToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: '',
    };
  }

  handleChange = e => {
    this.props.handleInput(e.target.value);
    // this.setState({ toDoItem: e.target.value });
  };

  handleClick = e => {
    this.props.addTodo();
  };

  render() {
    return (
      <React.Fragment>
        <input onChange={this.handleChange} value={this.props.input} />
        <button onClick={this.handleClick}>Add Todo</button>
      </React.Fragment>
    );
  }
}

export default AddToDoForm;

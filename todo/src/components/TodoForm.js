import React, { Component } from 'react';
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input type="text" name="newTodo" onChange={this.changeHandler} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;

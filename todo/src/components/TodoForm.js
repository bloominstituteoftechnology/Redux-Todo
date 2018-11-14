import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: null,
      completed: false,
    }
  }

  inputHandler =  e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() { 
    return (
      <div className="form-container">
        <form onSubmit={() => {}}>
          <input 
          type="text"
          name='text'
          value={this.state.text}
          onChange={this.inputHandler}  />
          <button className="add-button">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
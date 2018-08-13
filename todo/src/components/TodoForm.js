import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: '',
    }
  }

  handleInput = event =>{
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleInput}
          placeholder="Enter a Task!"
        />
        <button type="submit">Add the Task!</button>
      </form>
    );
  }
}

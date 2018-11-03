import React, { Component } from 'react';

class SubmitTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoInput: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.todoInput)
    }

    render() {
    return (
      <form>
        <input 
            name='todoInput'
            type='text'
            placeholder='Type to-do item here'
            onChange={this.inputHandler}
            value={this.state.todoInput}
        />
        <button
            type='submit'
        >
            Submit to-do item
        </button>
      </form>
    );
  }
}

export default SubmitTodo;

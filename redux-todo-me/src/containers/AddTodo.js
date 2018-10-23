import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../Actions'

class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo = (text) => {
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }
  
  render() {
    return (
      <div>
        <form action="">
        <input 
        // type="text" 
        placeholder='Add todos' 
        value={this.state.text} 
        onChange={(text) => this.setState({ text })} 
        />
        </form>
        <button onClick={() => this.addTodo(this.state.text)}>Click to add todo</button>
      </div>
    );
  }
}

export default connect()(AddTodo);
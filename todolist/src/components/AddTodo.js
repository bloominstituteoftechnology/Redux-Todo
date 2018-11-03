import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state={
      input: ''
    }
  }
inputChangeHandler = (e) => {
this.setState({input: e.target.value})
}
  render() {
    return (
      <div>
      <form>
      <input onChange={this.inputChangeHandler} value={this.state.input} placeholder={'Add Todo...'}/>
      <button>Add To-Do</button>
      </form>
      </div>
    )
  }
}

export default AddTodo

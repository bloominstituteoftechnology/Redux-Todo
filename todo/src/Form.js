import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from './action/action'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state ={
      value: ''
    }
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name='value' value={this.state.value} onChange={this.inputHandler} />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, {addTodo})(Form)
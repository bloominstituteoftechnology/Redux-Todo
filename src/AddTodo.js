import React, { Component } from 'react'
import { addTodo } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class AddTodo extends Component {
  render() {
    let input
    return (
      <div>
        <input
          type='text'
          ref={node => {
            input = node;
          }}/>
        <button onClick={() => {
          this.props.addTodo(input.value)
          input.value=''
        }}>+</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTodo)


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions'

class ToDo extends Component {
  // keep state of list items obj { todoname: completed };

  render () {
    let input;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          this.props.addItem(input.value)
          input.value = ''
        }}>
          <input ref={ node => input = node } />
          <button type="submit">
            Add Todo
          </button>
        </form>
        <p>toDo: { this.props.state }</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { addItem, })(ToDo);
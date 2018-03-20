import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'


class TodoInput extends Component {


  // handleInputChange() {

  // }

  render() {
    return (
      <div>
        <input />
      {/* <input onSubmit={this.props.handleInputChange()} /> */}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(TodoInput);

// export default connect(mapStateToProps, { openDoor: open, closeDoor: close })(
//   Controls
// );
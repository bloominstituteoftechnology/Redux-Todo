import React, { Component } from "react";
import PropTypes from 'prop-types';
// import { connect } from "react-redux";
// import { FUNC1, FUNC2 } from "../actions"

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;

// class Todo extends Component {
//   Method1 = () => {
//       return this.props.SOMETHING()
//   }

  // Method 2


//   render() {
//     return (
//       <li
//         onClick={onClick}
//         style= { { textDecoration: completed ? 'line-through': 'none' } }
//       >
//       {text}
//       </li>
//     )
//   }
// }


// const mapStateToProps = (state) => {
//   console.log("State:", state)
//   return {
//     key: value
//   }
// }

// export default connect(mapStateToProps, { FUNC1, FUNC2 })(TODO);
import React from 'react'
import PropTypes from 'prop-types'
​
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
​
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
​
export default Todo



















// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addTask } from '../actions';



// const Todo = ({ onClick, completed, text }) => (
//   <li onClick={onClick}
//   style={{
//     textDecoration: completed ? 'line-through' : 'none'
//   }}
//   >
//   {text}
//   </li>
// )

// const AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form
//       onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTask(input.value))
//         input.value = ''
//       }}
//       >
//       <input ref={node => input = node} />
//       <button type="submit">
//       Add Task
//       </button>
//       </form>
//     </div>
//   )
// }

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

// export default connect(Todo)(AddTodo)
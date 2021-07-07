import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
​
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
​
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
​
export default TodoList














// import React from 'react';
// import PropTypes from 'prop-types';
// import Todo from './ToDo';
// import { connect } from 'react-redux';
// //import { toggleCompleted } from '../actions';

// class ToDoList extends Component {
//     renderTodos() {
//         return this.props.todos.map(todo => {
//             return (

//             )
//         }

//         })
//     }

// }

// = ({ todos, toggleCompleted }) => (
//     <ul>
//         {todos.map(todo => 
//             <Todo
//                 key={todo.id}
//                 {...todo}
//                 onClick={() => toggleCompleted(todo.id)}
//             />
//             )}
//   </ul>
// )

// ToDoList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             completed: PropTypes.bool.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired,
//     ).isRequired,
//     toggleCompleted: PropTypes.func.isRequired
// }

// const mapStateToProps = (state) => {
//     return {
//       todos: state.todos,
//     };
//   };
  
// //   const mapDispatchToProps = (dispatch) => { //methods on the returned object will be a prop
// //     // When we call selectMovie we should pass the action to all reducers
// //     toggleCompleted: id => dispatch(toggleCompleted(id))
// //   };
  
//   export default connect(mapStateToProps)(ToDoList);
  



import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';


const Todos = ({ todos }) => (
 
    <ul>
      {todos.map(todo => {
          return(
          <Todo
            key={todo.id}
            // value={todo.value}
            {...todo}
          />
      );
      })}
    </ul>
   );
 
   // write a mapStateToProps function to get our state from the Redux store
const mapStateToProps = state => ({
  todos: state.todos
});

// Use the "connect" HOC to get this component connected to Redux

export default connect(
  mapStateToProps,
  // { changeColor: changeColor }
)(Todos);

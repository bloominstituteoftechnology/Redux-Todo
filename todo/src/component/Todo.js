import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action';

function Todo(props) {
    return (
        <div>
            <form onSubmit={addTodo}>
            <input type='text' placeholder='newtodo'/>
            <button>Add Task</button>
            </form>
            <ul>
                {props.todosList.map(todo => {
                    return <li key={todo.task}>{todo.task}</li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    todosList: state.todos
  });
  // Use the "connect" HOC to get this component connected to Redux
  export default connect(
    mapStateToProps,
    { addTodo }
  )(Todo);
  
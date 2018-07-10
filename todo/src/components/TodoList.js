import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            <h3>TodoList</h3>
            {props.todos.map(todo => (
                <Todo key={Math.random()} todo={todo} />
            ))}
        </div>
    );
}

const mapStatetoProps = (state) => {
    console.log('STATE: ', state);
    return {
      todos: state.todos
    };
  };
 
export default connect(mapStatetoProps)(TodoList);
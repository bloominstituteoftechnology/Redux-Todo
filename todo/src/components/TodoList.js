import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleCompletion } from '../actions';

const TodoList = (props) => {
    return ( 
        <ul>
            {props.todos.map(todo => {
                return <Todo id = {todo.id} 
                key = {todo.id} 
                todo={todo} 
                toggleCompletion = {props.toggleCompletion} />
            })}
        </ul>
     );
}
 const mapStateToProps = state => {
     return {
        todos: state.todos
     }
 }
export default connect(mapStateToProps, { toggleCompletion })(TodoList);
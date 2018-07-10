import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
const TodoList = (props) => {
    return ( 
        <ul>
            {props.todos.map((todo,index) => {
                return <Todo key = {index} todo={todo} />
            })}
        </ul>
     );
}
 const mapStateToProps = state => {
     return {
        todos: state.todos
     }
 }
export default connect(mapStateToProps)(TodoList);
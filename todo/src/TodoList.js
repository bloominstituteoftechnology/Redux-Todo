// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';
import { connect } from "react-redux";
const TodoList = (props) => {
    
    return (
        <ul>
            {props.tasks.map(todo => {
                return (
                
                <Todo key={todo.id}id={todo.id} todo={todo} />
                
                );
            })}
        </ul>
    )
}
const mapStateToProps = state => {
    return {
        tasks: state.todo,
            };
            
};

export default connect(mapStateToProps)(TodoList);


import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';



const ToDoList = (props) => {
    return (
        <div>
            
            {props.todos.map(todo => {
                return (
                <Todo key = {todo.id} {...todo} />
                )
            })}

        </div>
    );
};


const mapStateToProps = state => {
    return { todos: state.todos}
};

export default connect (mapStateToProps)(ToDoList);
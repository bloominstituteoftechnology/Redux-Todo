import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

const ToDoList = (props) => {
    console.log(props)
    return(
        <div>
            {props.todos.map( item => (
                <ToDoItem item={item} value={item.value} completed={item.completed} key={item.value} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos 
    };
};

export default connect(mapStateToProps)(ToDoList);
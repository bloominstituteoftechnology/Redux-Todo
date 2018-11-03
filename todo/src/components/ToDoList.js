import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
import { toggle, deleter } from '../actions/actions';

const ToDoList = (props) => {
    return(
        <div>
            {props.todos.map( item => (
                <ToDoItem item={item} onClick={() => props.toggle(item.id)} delete={()=> props.deleter(item.id)} id={item.id} value={item.value} completed={item.completed} key={item.value} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos 
    };
};

export default connect(mapStateToProps, {toggle, deleter} )(ToDoList);
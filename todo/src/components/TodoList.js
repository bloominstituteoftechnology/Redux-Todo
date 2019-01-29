import React from 'react';
import { connect } from 'react-redux';
import { addToList, toggleComplete } from '../actions';
import TodoItem from './TodoItem';

const TodoList = props => {
    

    return(
        <div className='todo-list-container'>
            {props.todoList.map((t, i) => {
                return <TodoItem key={i} todo={t} id={i} toggle={props.toggleComplete}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToList: text => dispatch(addToList(text)),
        toggleComplete: index => dispatch(toggleComplete(index))
    }
}

const connectState = connect(
    mapStateToProps,
    mapDispatchToProps
)

const TodoListEnhanced = connectState(TodoList);

export default TodoListEnhanced;
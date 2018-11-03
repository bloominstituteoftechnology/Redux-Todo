import React from 'react';
import { connect } from 'react-redux';

import { UpdateTodoAction, DeleteTodoAction } from '../redux/actions';
import './todo.css'

const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todoCards.map(card => {
                if (card.complete) {
                    return (
                        <>
                            <p key={card.id} className='todo-card complete' onClick={() => props.UpdateTodoAction(card.id)}>{card.title}</p>
                            <button onClick={() => props.DeleteTodoAction(card.id)}>Delete</button>
                        </>
                    )
                }
                return <p key={card.id} className='todo-card' onClick={() => props.UpdateTodoAction(card.id)}>{card.title}</p>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoCards: state,
    }
}

export default connect(mapStateToProps, { UpdateTodoAction, DeleteTodoAction})(TodoList);
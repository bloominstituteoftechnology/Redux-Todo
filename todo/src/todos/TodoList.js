import React from 'react';
import { connect } from 'react-redux';

import { UpdateTodoAction } from '../redux/actions';
import './todo.css'

const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todoCards.map(card => {
                console.log(card.complete)
                if (card.complete) {
                    return (
                        <p className='todo-card complete' onClick={() => alert('boo')}>{card.title}</p>
                    )
                }
                return <p className='todo-card' onClick={() => UpdateTodoAction(card.id)}>{card.title}</p>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoCards: state.todoCards,
    }
}

export default connect(mapStateToProps, { UpdateTodoAction })(TodoList);
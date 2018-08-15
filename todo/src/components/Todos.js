import React from 'react'

import Todo from './Todo'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../Actions/'

const Todos = props => {
    return (
        <ul>
            {props.todos.map( event => (
                <div>
                    <Todo key={event.id} item={event} toggleTodo={props.onToggleTodo}/>
                    <button onClick={() => props.onDeleteTodo (event.id)}>
                        Delete Item
                    </button>
                </div>
            ))}
            <input type='text' placeholder='Add Item' onKeyDown={event => { if(event.key === 'Enter') props.onAddTodo(event.target.value)}}/>
        </ul>
    )
}

const mapDispatchToProps = dispath => ({
    onAddTodo: text => dispatch(addTodo(text)),
    onToggleTodo: id => dispath(toggleTodo(id)),
    onDeleteTodo: id => dispath(deleteTodo(id))
})

const mapStateToProps = state => ({
    todos: state
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
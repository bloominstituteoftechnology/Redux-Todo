import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = (props) => {
    let input;

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                props.addTodo(input.value);
                input.value = '';
            }}>
            <input type = 'text' placeholder='New task' ref={node => input = node}></input>
            <button type = 'submit'>Add Todo</button>
            </form>
            
        </div>
    )
}


const mapStateToProps = state => {
    return { todos: state.todos}
}


export default connect(mapStateToProps, {addTodo})(AddTodo);
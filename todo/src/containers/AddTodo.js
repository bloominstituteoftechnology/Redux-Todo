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

            {/*Using `ref` is dirty, dirty, deprecated React code--that is too essential to be merged out--*ahem*,
            so you should definitely be using a Class constructor to handle this local state node's input instead. :D*/}

            <input type = 'text' placeholder='New task' ref={node => input = node}></input>
            <button type = 'submit'>Add Todo</button>
            </form>
            
        </div>
    );
};


const mapStateToProps = state => {
    return { todos: state.todos};
};


export default connect(mapStateToProps, {addTodo})(AddTodo);
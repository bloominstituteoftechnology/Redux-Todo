import React from 'react';
import { connect } from 'react-redux';
import { onChange, addTodo } from '../Actions/';

const TodoForm = props => {
    const clickHandler = event => {
        console.log(props.todo)
        event.preventDefault();
        props.addTodo(props.todo);
    };
    return (
        <form>
            <input 
                type='text' 
                placeholder='Todo' 
                value = {props.todo}
                onChange = {props.onChange}
            />
            <button onClick={clickHandler}>Submit</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}


export default connect(mapStateToProps, {onChange, addTodo})(TodoForm);
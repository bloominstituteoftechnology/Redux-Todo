import React from 'react';
import { connect } from "react-redux";
import { handleChange, addTodo } from "../actions";

const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                placeholder="Add todo"
                name="input"
                value={props.todo}
                onChange={props.handleChange}
            />
            <button onClick={event => props.addTodo(event, props.todo)}>Add Todo</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps, { handleChange, addTodo })(TodoForm)
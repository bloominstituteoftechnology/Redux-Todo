import React from 'react';

const AddToDo = (props) => {
    return (
        <form onSubmit={(e) => {props.handleSubmit(e)}}>
            <input placeholder="Add a ToDo" type="text" name="input"/>
        </form>
    )
}

export default AddToDo;
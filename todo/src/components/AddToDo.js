import React from 'react';


const AddToDo = (props) => {
    return (
        <form onSubmit={(e) => {props.handleOnSubmit(e)}}>
        <input placeholder="add an item..."type="text" name="input"/>
      </form>
    )
}

export default AddToDo;
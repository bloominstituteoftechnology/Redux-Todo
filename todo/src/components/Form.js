import React from 'react'

const Form = props =>{
    return(
        <form onSubmit={props.submitHandler}>
        <input type='text' value={props.input} onChange={props.changeHandler} placeholder='What now?'></input>
        <button type='submit'>add item</button>
        </form>
    )
}

export default Form
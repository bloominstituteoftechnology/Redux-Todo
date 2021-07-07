import React from 'react';

let Form = props => {
    return (
        <form onSubmit={props.submitHandler}>
            <input type='text' placeholder='Enter your todo here' name='todo' value={props.value} onChange={props.changeHandler}/>
            <input type='submit'/>
        </form>
    )
}

export default Form;
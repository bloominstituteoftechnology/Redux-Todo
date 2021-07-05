import React from 'react';


const TodoForm = (props) =>{
return(
    <div>
        <h1>Please Create Your List Below</h1>
        <form>
            <input name="todoitem" placeholder="Enter Your Task Here" />
        </form>
    </div>
);
}

export default TodoForm;
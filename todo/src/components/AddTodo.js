import React from 'react';
​
const AddTodo = ({ onClick, text }) => (
<form onSubmit={text}>
    <input type="text" value={text}/>
    <button>Add To Do</button>
</form>
)
​​
export default AddTodo
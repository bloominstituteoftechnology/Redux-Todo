import React from 'react';

const TodoItem = props => {
    return (
        <form>
            <input type='text' placeholder='What to do?' />
            <button>ADD</button>
        </form>
    );
}
 
export default TodoItem;
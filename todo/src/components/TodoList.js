import React from 'react';
import Todo from './Todo';

const TodoList = ({list, toggle}) => {

    return (
        <div className='list-container'>
            {
                list.map((todo, i) => {
                    return <Todo todo={todo} key={i} toggle={toggle} index={i}/>
                }).reverse()
            }
        </div>
    );
}

export default TodoList;


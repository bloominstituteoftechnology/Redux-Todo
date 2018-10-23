import React from 'react';

const Todo = ({todo, toggle, index}) => {
    const { value, completed} = todo;
    return (
        <div className='todo' onClick={() => toggle(index)}>
            <div style={completed ? { textDecorationLine: 'line-through', color: 'rgb(64, 247, 168)'} : {}}
            >{value}</div>
            <i className="fa fa-check-square"style={completed ? {color: 'rgb(64, 247, 168)'} : {color:'rgb(247, 150, 64)'}}></i>
        </div>
    );
}

export default Todo;

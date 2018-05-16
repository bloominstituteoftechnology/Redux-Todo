import React from 'react';

const Todos = props => {
    return (
        <div>
            <li>{props.todos}</li>
        </div>
    );
};

export default Todos;
import React from 'react';
import Todosarray from './Todosarray';


class Todosarraydisplay extends React.Component {
    constructor(props){
        super(props);
    }

    
    render(){
        return (
            <div>
                <ul>
                    {Todosarray.map((todo) => {
                        return <li>Item: {todo.text}  </li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default Todosarraydisplay;
import React from 'react';
import Todosarray from './Todosarray';


class Todosarraydisplay extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     todosarray: [
        //         { text: "Cat " },
        //         { text: "Fish " },
        //         { text: "Dog " },
        //         { text: "Bird " },
        //     ]
        // }
    }

    
    render(){
        return (
            <div>
                <ul>
                    {Todosarray.map((todo) => {
                        return <li>{todo.text}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default Todosarraydisplay;
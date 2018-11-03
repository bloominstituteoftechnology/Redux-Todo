import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render() {
        return (
            <div>
                {this.props.comment}
            </div>
        )
    }
};

export default Todo
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
    
    }
}
    render() { 
        return ( <div>{this.props.todo.value}</div> );
    }
}
 
export default Todo;
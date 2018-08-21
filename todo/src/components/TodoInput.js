import React, { Component } from 'react';

class TodoInput extends Component {
    state = { 
        value: "",

     }
    render() { 
        // return ( <form onSubmit={} >
        return (
        <form>
            <input type="text" placeholder="type here" />
        </form> );
    }
}
 
export default TodoInput;
import React from 'react';
import styled from 'styled-components';


class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <form>
                <input type="text" name="todo-input"/>
            </form>
        )
    }
}
export default AddTodo;

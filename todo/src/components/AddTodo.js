import React, { Component } from 'react';
import styled from 'styled-components';


const AddTodoContainer = styled.div`
        width:450px;
        display:flex;
        flex-flow:column;
`;

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    handleInput

    render(){
        return (
            <AddTodoContainer>
                <input type="text" value="" placeholder="Add a todoooo" />
                <button onClick={(e)=>{this.props.handleAddTodo(e)}} >Add Todo</button>
            </AddTodoContainer>
        )
    }

}

export default AddTodo;
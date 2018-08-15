import React, { Component } from 'react';
import styled from 'styled-components';


const AddTodoContainer = styled.div`
        width:50%;
    display:flex;
    flex-flow:column;
`;

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <AddTodoContainer>AddTdod</AddTodoContainer>
    }

}

export default AddTodo;
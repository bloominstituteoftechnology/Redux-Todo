import React from 'react';
import styled from 'styled-components';


const WrapperDiv = styled.div`
    width:100%;
    border: 1px solid red; 
    display:flex;
    justify-content:center;
    align-items:center;
`
const Header = styled.p`
    font-size:2rem;
`
const MedInput = styled.input`
    width:200px;
    height:25px;
    line-height:1.8rem;
`
const Button = styled.button`
    width:75px;
    height:30px;
`
const AddToDo = props =>{
    return (
        <WrapperDiv>
            <form onSubmit={props.AddToDo}>
                <Header>To Do</Header>
                <MedInput placeholder="...todo" type='text'/> 
                <Button>Submit</Button>
            </form>
        </WrapperDiv>
    )
}

export default AddToDo
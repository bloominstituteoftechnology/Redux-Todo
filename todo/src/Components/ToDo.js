import React from 'react';
import styled from 'styled-components';

const Item = styled.p`
    font-size:1.8rem;
`
const WrapperDiv = styled.div`
    display:flex:
`

const ToDo = props => {
    return(
        <WrapperDiv><Item onClick={(event)=>{props.handleToggleClick(event, props.item.id)}}>{props.item.desc} - {props.item.status.toString()}</Item><button id={props.item.id} onClick={props.handleDeleteClick}>Delete</button></WrapperDiv>
    )
}

export default ToDo
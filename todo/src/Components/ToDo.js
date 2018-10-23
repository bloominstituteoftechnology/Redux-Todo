import React from 'react';
import styled from 'styled-components';

const Item = styled.p`
    font-size:1.8rem;
`

const ToDo = props => {
    return(
        <Item>{props.item.desc}</Item>
    )
}

export default ToDo
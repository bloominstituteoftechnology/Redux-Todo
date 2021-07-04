import React from 'react';
import { connect } from 'react-redux';
import {toggle} from '../actions/actions';
import { ItemStyle, ItemBlock, DeleteButton } from './StyledComponents';

const ToDoItem = (props) => {
    console.log(props)
    return(
        <ItemStyle>
            <ItemBlock onClick={props.onClick}
            style={{
                textDecoration: props.completed ? 'line-through' : 'none'
            }}
            >
                <h3> - {props.value}</h3>
            </ItemBlock>
            <DeleteButton onClick={props.delete}>Delete me</DeleteButton>
        </ItemStyle>
    )
}


export default connect(()=>({}), {toggle})(ToDoItem);
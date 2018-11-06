import React from 'react';
import { connect } from 'react-redux';
import { toggleCompletedAction, deleteItem  } from '../action/actions';
import styled from 'styled-components';

const TodoDiv = styled.div `
    .completed{
        color: red;
        text-decoration: line-through;
    }
`

const Todo = props => {
    return(
        <TodoDiv>
            <h1 className={props.item.completed?'completed':''} onClick={()=>props.toggleCompletedAction(props.item.id)}>{props.item.name}</h1>
            <button onClick={()=>props.deleteItem(props.item.id)} >x</button>
        </TodoDiv>
    )
}
const mapStateToProps= state =>{
    return state
}
export default connect(mapStateToProps, {toggleCompletedAction, deleteItem} )(Todo)

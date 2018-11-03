import React from 'react';
import { connect } from 'react-redux';
import { toggleCompletedAction } from '../action/actions';

const Todo = props => {
    return(
        <div>
            <h1 onClick={()=>props.toggleCompletedAction(props.item.id)}>{props.item.name}</h1>
        </div>
    )
}
const mapStateToProps= state =>{
    return state
}
export default connect(mapStateToProps, {toggleCompletedAction} )(Todo)
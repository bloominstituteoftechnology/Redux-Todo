import React from 'react';
import {toggleItem,deleteItem} from './actions';
import {connect} from 'react-redux';

const Todo=(props)=>{
return <li style={{textDecoration: props.data.completed ? 'line-through': 'none'}} 
onClick={()=>{props.toggleItem(props.data.id)}}>
{props.data.value}  <button type='button' className='btn waves-effect waves-light' onClick={()=>props.deleteItem(props.data.id)}>DEL</button></li>}

const mapStateToProps=(state)=>{
    return {
        todos:state.todos
    }
}
export default connect(mapStateToProps, {toggleItem,deleteItem} )(Todo); 
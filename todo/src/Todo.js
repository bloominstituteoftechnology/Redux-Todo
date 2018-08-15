import React from 'react';
import {toggleItem} from './actions';
import {connect} from 'react-redux';

 const Todo=(props)=>{return <li style={{textDecoration: props.data.completed ? 'line-through': 'none'}} onClick={()=>{props.toggleItem(props.data.id)}}>{props.data.value}</li>}

const mapStateToProps=(state)=>{
    return {
        todos:state.todos
    }
}
export default connect(mapStateToProps, {toggleItem} )(Todo); 
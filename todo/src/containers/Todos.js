import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';

const Todos = (props)=>{
    return(
        <ul>
            {props.todos.map(item=><Todo key={item.value} todo={item.value}/>)}
        </ul>
    )
}

const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);
import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
import {completeTodo} from '../actions/actions';

const Todos = (props)=>{
    return(
        <ul>
            {props.todos.map(item=><Todo key={item.id} todo={item} completeTodo={props.completeTodo}/>)}
        </ul>
    )
}

const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {completeTodo})(Todos);
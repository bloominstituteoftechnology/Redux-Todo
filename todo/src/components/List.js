import React from 'react';
import { connect } from 'react-redux'
import Todo from './ToDo';

const List = (props) => {
    return (
        <div> {props.todo.map(item => ( <Todo key={item.id} item={item} />))} </div>
    )
}


const mapStatetoProps = (state) => {
    return state;
}

export default connect(mapStatetoProps)(List)
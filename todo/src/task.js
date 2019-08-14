import React from 'react'; 
import { completeTodo } from './actions'; 
import {connect} from 'react-redux'; 

export const Todo = (props) => {
    if(props.todo.completed) {
        return (
            <li style={{textDecoration: "line-through"}}>{props.todo.value}</li>
        )
    } else {
        return (
            <li onClick={() => props.completeTodo(props.todo.id)}>{props.todo.value}</li>
             
        )
    }
}

const mapStateToProps = state => {
      return {todos: state };  
}

export default connect(mapStateToProps, { completeTodo })(Todo);
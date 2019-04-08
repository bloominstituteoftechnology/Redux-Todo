import React from 'react';
import {completeTodo} from '../actions/indexAction';
import {deleteTodo} from '../actions/indexAction';
import { connect } from 'react-redux';
import './Todo.css';

const Todo = props => {
    console.log(props.todo)
    return (
    <div
         onClick={ () => props.completeTodo(props.todo.id)} 
 className={props.todo.completed ? 'taskComplete' : 'taskNotComplete' }>
            <h2>{props.todo.todo}</h2>
            {/* <div onClick={ () => props.deleteTodo(props.todo.id)}>x</div> */}
    </div>
    )
};


function mapStateToProps(state){
        return {todos: state.todos}
      }
      export default connect(mapStateToProps, {completeTodo, deleteTodo})(Todo);

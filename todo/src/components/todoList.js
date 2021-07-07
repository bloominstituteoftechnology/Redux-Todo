import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo'


const TodoList =(props)=>{
        return(
            <div>
                {props.todo.map(item =>(
                    <Todo key={item.id} item={item}/>
                ))}
            </div>
        )
    }
    const mapStateToProps=(state)=>{
        return state;
    }
export default connect(mapStateToProps)(TodoList)
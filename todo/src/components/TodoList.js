import React  from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

const TodoList = (props) => {
        return (
            <div>
                 {props.todos.map((todo)=> {
                     return (
                      <li
                         key={todo.id}>
                        {todo.text}
                    </li>
                     )
                 })}
            </div>
 
        )
    }


export default connect(null, {toggleTodo})(TodoList);
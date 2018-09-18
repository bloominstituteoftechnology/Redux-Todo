import React  from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

const TodoList = (props) => {
        return (
            <div>
                 {props.todos.map((todo)=> {
                     return (
                      <li
                        onClick={() => props.toggleTodo(todo.id)}
                        key={todo.id}                        
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
                        >
                        {todo.text}
                    </li>
                     )
                 })}
            </div>
 
        )
    }


export default connect(null, {toggleTodo})(TodoList);
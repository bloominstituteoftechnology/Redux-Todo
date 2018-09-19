import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';

class TodoList extends Component{
    state = {
        text: ''
    };

    render(){
        const {todos} = this.props;
        return(
            <div>
                Todo List!
                <ul>
                    {todos.map(todo =>{
                        return(
                            <li>
                                todo.value
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;
import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoContainer extends Component{
    render(){
        return (
            <React.Fragment>
                <TodoList />
                <TodoInput />
            </React.Fragment>      
        )
    }
}

export default TodoContainer;
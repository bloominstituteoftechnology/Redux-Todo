import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { addNewTodo } from '../actions';

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            inputText : '',
            todoList : [{
                value : 'Make a todo Item',
                completed : false,
            }]
        };
    }

    onChangeHandler = e => {
        e.preventDefault();
        this.setState({
            inputText : e.target.value
        })
        // console.log(this.state.inputText);
    }

    onSubmit = e => {
        e.preventDefault();
        //Put a function in here to change the state of the application 
        //through props, make sure to have a value that passes in
        this.props.addNewTodo(this.state.inputText);
        console.log(e.target);
    }

    render(){
        return(
            <div className="Todo">
                <TodoForm 
                onChangeHandler={this.onChangeHandler}
                onSubmit = {this.onSubmit}
                inputText = {this.state.inputText}
                />
                <TodoList />
            </div>
        )
    }
}

export default Todo;
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { addNewTodo,toggleCompleted } from '../actions';
import {connect} from 'react-redux'


export class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            inputText : '',
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
    }

    onClick = (index) => {
        this.props.toggleCompleted(index);
    }

    render(){
        return(
            <div className="Todo">
                <TodoForm 
                onChangeHandler={this.onChangeHandler}
                onSubmit = {this.onSubmit}
                inputText = {this.state.inputText}
                />
                <TodoList
                todoList={this.props.todoList}
                toggleCompleted={this.onClick}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
};

export default connect(
    mapStateToProps,
    { addNewTodo,toggleCompleted }
)(Todo);

// export default connect(
//     mapStateToProps,
//     { toggleCompleted }
// )(Todo);

// export default Todo;
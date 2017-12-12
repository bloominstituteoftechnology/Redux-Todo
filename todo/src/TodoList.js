import React, { Component } from 'react';
import {connect} from 'react-redux';
import addTodo from './Actions';

    //default state
class TodoList extends Component {
    constructor() {
        super();
        this.state = { 
            todos: [],
            newTodo: ''
        };
    }

    // addTodo = (event) => {
    //     event.preventDefault(); 
    //     const todoList = this.state.todos;
    //     todoList.push(this.state.newTodo);
    //     this.setState({ 
    //         newTodo: '', 
    //         todos: todoList, 
    //     });
    // };    

    addTodo = (event) => {
        event.preventDefault();   
        console.log('addtodo called');
        this.props.onSubmit(this.state.newTodo);
    }

    handleTodoInput = (event) => {
        this.setState({ newTodo: event.target.value }); 
    };


    render() {
        console.log('this.props', this.props);
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoInput} placeholder="Add a new todo" value={this.state.newTodo} /> 
                    <button>Submit</button>
                </form>
                {this.props.todo.items.map((todo, index) => <div key={index}> {todo.action}</div>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todo: state.todo,
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) =>{
            dispatch(addTodo(text))
        }
    }
}

let AddTodo = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default AddTodo

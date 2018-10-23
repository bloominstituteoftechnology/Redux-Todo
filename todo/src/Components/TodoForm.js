import React from 'react';
import { connect } from 'react-redux'; 
import {addTodo, deleteTodo} from '../Actions';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            todoText: "",
        }
    }

    changeHandler = e => this.setState({ [e.target.name]: e.target.value });

    addHandler = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({todoText: ""})
      };

    deleteHandler = e => {
        e.preventDefault();
        this.props.todos.filter(todo => {
            if (todo.completed === true) {
                this.props.deleteTodo(todo.task);
            }
        })
    };

    render() {
        return(
            <div>
                <form onSubmit={this.addHandler}>
                <input 
                    type="text" 
                    name="todoText" 
                    placeholder="What do you have todo?" 
                    value={this.state.todoText} 
                    onChange={this.changeHandler}>
                </input>
                <button onClick={this.addHandler}>Add Todo</button>
                </form>
                <button onClick={(e) => this.deleteHandler(e)}>Clear Completed</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.todos,
    };
  };
  
  export default connect(
    mapStateToProps,
    { addTodo, deleteTodo }
  )(TodoForm);
import React from 'react';
import { connect } from 'react-redux'; 
import {addTodo} from '../Actions';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            todoText: "",
        }
    }

    changeHandler = e => this.setState({ [e.target.name]: e.target.value });

    clickHandler = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({todoText: ""})
      };

    render() {
        return(
            <div>
                <form onSubmit={this.clickHandler}>
                <input 
                    type="text" 
                    name="todoText" 
                    placeholder="What do you have todo?" 
                    value={this.state.todoText} 
                    onChange={this.changeHandler}>
                </input>
                <button onClick={this.clickHandler}>Add Todo</button>
                </form>
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
    { addTodo }
  )(TodoForm);
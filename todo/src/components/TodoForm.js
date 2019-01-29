import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToList } from '../actions';

class TodoForm extends Component { 
    constructor(){
        super();
        this.state = {
            inputText: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault();
        this.props.addToList(this.state.inputText);
        this.setState({
            inputText: ''
        });
    }

    render(){
        return(
            <form>
                <input 
                    type='text'
                    name='inputText'
                    value={this.state.inputText}
                    placeholder='Add item to List'
                    onChange={this.handleChange}
                    autoComplete='off'
                />
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToList: text => dispatch(addToList(text)),
    };
}

const connectState = connect(
    mapStateToProps,
    mapDispatchToProps
)

const TodoFormEnhanced = connectState(TodoForm);

export default TodoFormEnhanced;
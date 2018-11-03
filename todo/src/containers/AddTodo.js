import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {addTodo} from '../actions/actions';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;


    form{
        display: flex;
        justify-content: space-between;
        width: 50%
    
        .todo-input{
            width: 80%;
            height: 30px;
            font-size: 1.8rem;
            margin-right: 10px;
            outline: none;
            border: 1px solid black;
            border-radius: 5px;
        }
    
        .submit-button{
            width: 20%;
            color: black;
            font-size: 1.8rem;
            background-color: white;
            border: 2px solid black;
            border-radius: 5px;
            outline: none;

            &:hover{
                color: white;
                background-color: black;
                cursor: pointer;
            }
        }
    }
    
`;

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleTextInput = (event)=>{
        event.preventDefault();
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.state.value === ''){
            return;
        }
        const id = this.props.todos.length ? this.props.todos[this.props.todos.length - 1].id + 1 : 0;
        this.props.addTodo(id, this.state.value);
        this.setState({
            value: ''
        })
    }

    render(){
        return(
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <input className="todo-input" type="text" onChange={this.handleTextInput} placeholder=" Enter todo item..." value={this.state.value}></input>
                    <input className="submit-button" type="submit" value="Submit"></input>
                </form>
            </FormContainer>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo})(AddTodo);
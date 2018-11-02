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
        justify-content: center;
        width: 50%
    
        .todo-input{
            width: 80%;
            height: 25px;
            margin-right: 10px;
            outline: none;
            border: 1px solid black;
            border-radius: 5px;
        }
    
        .submit-button{
            width: 20%;
            color: black;
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
            currentID: 0,
            value: ''
        }
    }

    componentDidMount(){
        if(this.props.todos.length > 0){
            this.setState({
                currentId: this.props.todos[this.props.todos.length - 1].id + 1
            })
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
        this.props.addTodo(this.state.currentID, this.state.value);
        this.setState({
            currentID: this.state.currentID + 1,
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
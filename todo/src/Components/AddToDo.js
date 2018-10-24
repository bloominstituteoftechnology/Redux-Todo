import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {addToDo} from '../Actions'



const WrapperDiv = styled.div`
    width:100%;
    border: 1px solid red; 
    display:flex;
    justify-content:center;
    align-items:center;
`
const Header = styled.p`
    font-size:2rem;
`
const MedInput = styled.input`
    width:200px;
    height:25px;
    line-height:1.8rem;
`
const Button = styled.button`
    width:75px;
    height:30px;
`
class AddToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todoText: ''
        }
    }

    handleTextChange = event => {
        this.setState({todoText:event.target.value})
    }

    addToDoItem =event =>{
        event.preventDefault();
        this.props.addToDo(this.state.todoText);
    }
    render(){
        return (
            <WrapperDiv>
                <form onSubmit={this.addToDoItem}>
                    <Header>To Do</Header>
                    <MedInput onChange={this.handleTextChange} value={this.state.todoText} placeholder="...todo" type='text'/> 
                    <button type='submit'>save</button>
                </form>
            </WrapperDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.toDoList
    };
};
export default connect(mapStateToProps, { addToDo })(AddToDo);
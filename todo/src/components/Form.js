import React, { Component } from "react";
import Input from './styled-component/Input';
import Button from  './styled-component/Button';
import { connect } from 'react-redux';
import {addTodo, deleteTodo, updateTodo, toggleTodo } from '../actions/action';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    inputChange = event => {
        this.setState({
             [event.target.name]: event.target.value
        })
    }
    formSubmit = event => {
         event.preventDefault();
         this.props.addTodo(this.state.value);
         this.setState({
             value: ''
         })
    }
    render() {
        console.log(this.props);
        return (
            <div>
               <form onSubmit={this.formSubmit}>
                    <Input 
                        type='text' 
                        name= 'value'
                        value = {this.state.value}
                        placeholder="Enter your text"
                        onChange={this.inputChange}
                        />
                        
                        <Button type="submit">Add Todo</Button>
                </form>                  
            </div>
        );
    }
}

// export default Form;

const mapStateToProps = () => {
     return {};
}

export default connect(mapStateToProps, {addTodo} )(Form);
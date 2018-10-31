import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions/actions';

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

    handleButtonClick = (event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.value);
    }

    render(){
        return(
            <div>
            <input type="text" onChange={this.handleTextInput} placeholder="Enter todo item..." value={this.state.value}></input>
            <div onClick={this.handleButtonClick}>Add Todo</div>
            </div>
        )
    }
}

export default connect(()=>({}), {addTodo})(AddTodo);
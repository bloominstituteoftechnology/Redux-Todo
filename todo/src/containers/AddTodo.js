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

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({
            value: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleTextInput} placeholder="Enter todo item..." value={this.state.value}></input>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default connect(()=>({}), {addTodo})(AddTodo);
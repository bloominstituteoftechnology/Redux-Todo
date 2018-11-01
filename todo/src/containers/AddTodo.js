import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions/actions';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentID: 0,
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
        this.props.addTodo(this.state.currentID, this.state.value);
        this.setState({
            currentID: this.state.currentID + 1,
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
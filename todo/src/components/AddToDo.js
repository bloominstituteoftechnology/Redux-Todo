import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';


class AddToDo extends Component { 
    constructor(props){
        super(props)
        this.state = {
            toDoItem: ""
        };
    }

    handleInputEvent = event => {
        this.setState({toDoItem: event.target.value})
    };

    addToList = () => {
        this.props.addToDo(this.state.toDoItem);
        this.setState({toDoItem: ""});
    }



    render() {
        return (
            <div>
                <input 
                    placholder="What needs to be done?"
                    type="text"
                    value={this.state.toDoItem}
                    onChange={this.handleInputEvent}
                />
                <button onClick={this.addToList}>Add To List</button>
            </div>
        )
    }
}

export default connect(null, { addToDo }) (AddToDo);
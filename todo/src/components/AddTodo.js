import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    render() {
        return(
            <div>
                <input 
                    placeholder='Enter Todo Please'
                    type='text'
                    value={this.state.todo}
                />
                <button>Add To List</button>
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodo);
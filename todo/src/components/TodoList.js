import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            item: '',
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };
    
    render() {
        return (
            <div>
                <input
                    name="item"
                    onChange={this.handleChange}
                    value={this.state.item}
                    placeholder="Add a item"
                    />
                    <button value={this.state.item} type="submit" onClick={(event) => this.props.addToDo(event.target.value)}> Add Item </button>
            </div>
        )
    }
}

export default connect(null, { addToDo })(ToDoList)
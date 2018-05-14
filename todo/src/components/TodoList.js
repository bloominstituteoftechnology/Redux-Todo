import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToDo } from '../actions'

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
        }
    }
    handleChange = event => {
        this.setState({ todo: event.target.value });
    };
    addItemToList = () => {
        this.props.addToDo(this.state.todo);
        this.setState({ todo: '' });
    };
    render() {
        return (
            <div>
                <input
                    placeholder="Add Items"
                    type="text"
                    value={this.state.todo}
                    onChange={this.handleChange}
                />
            <button onClick={this.addItemToList}> Add Item </button>
            </div>
        );
    }
}
export default connect(null, {addToDo}) (ToDoList)
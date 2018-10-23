import React from 'react';
import {connect} from 'react-redux';
import { addItem, toggleCompleted } from '../actions/index';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            itemText: ''
        }
    }

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
};

addItemHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.itemText);
}

render() {
    return (
        <div>
            <h1>To-Do List</h1>
            {this.props.items.map((item, index) => (
                <div key={index}>

                <h4 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                onClick={() => this.props.toggleCompleted(index)}>{item.task}</h4>
        </div>
            ))}
            <input
            type = "text"
            name = "itemText"
            onChange = {this.changeHandler}
            placeholder = "new item"
            value = {this.state.itemText}
            />
            <button onClick = {this.addItemHandler}>Add Task</button>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(
    mapStateToProps,
    { addItem, toggleCompleted }
)(List);
import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStore } from 'redux';
import todo from '../reducers/index.js';

import {addItem} from '../actions/index.js';
const store = createStore(todo);

class Todo extends React.Component {
    state = {
        item: ''
    }

    // handleInput = (e) => {
    //     this.setState({[e.target.name]: e.target.value});
    // }

    // handleSubmit = (e) => {
    // 	e.preventDefault();
    // 	const addTodo = {
    // 	    value: this.state.item,
    // 	    completed: false
    // 	};
    // 	this.props.add_item(addTodo);
    // }
    
    render () {
	return (
            <div>
	      <input
		type="text"
		placeholder="New item"
		value={this.props.itemOnProps}
		onChange={e => {
		    this.props.items(e.target.value);
		}}
		/>
		<h1>{this.props.itemOnProps}</h1>
	    </div>
	);
    }
}

const mapStateToProps = (state) => {
    console.log('current state: ', state);
    return {
        itemOnProps: state.item
    };
};

export default connect(
    mapStateToProps,
    {addItem}
)(Todo);

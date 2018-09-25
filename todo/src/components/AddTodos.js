import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './index.js';

//a submit button and input form, stateless w/ action = ADD_TODO
let AddTodo = () => {
return (
    <div>
        <form onSubmit={event => {onSubmit(input.value)}}>
            <input placeholder="what are we doing today?..." 
                type="text" 
                value={this.props.textOnProps}
                onChange={event => {this.props.addTodo(event.target.value)}} />
            <button type="submit">Adding Stuff</button>
        </form>
    </div>
)
}
export default AddTodo;
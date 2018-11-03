import React, { Component } from "react";
import {connect} from '../node_modules/react-redux';
// import { increment, decrement } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text = '',
            }
        }

    // functions go here
    // needs: onClick={addTodo} which is an event and adds the input/text to state
    // also needs an eventHandler which does the e.target.name === e.target.value thing.


     // render goes here
    render() {
        return(
            <div>
                <p>foo</p>
                <p>bar</p>
                <button onClick={}>Add to-do</button>
            </div>
        )
        }
    }
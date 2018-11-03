import React, { Component } from "react";
import {connect} from '../node_modules/react-redux';
// import { increment, decrement } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            input = '',
            }
        }

    // functions go here

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
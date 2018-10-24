
// Basic React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Dependencies
import {TO_DO_CREATE, TO_DO_DESTROY, TO_DO_COMPLETE} from '../actions';

class ToDo extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            inputText: ''
        };
    }
    render() {
        return (
            <div className="to-do">
                <form onSubmit={this.submitHandler}>
                    <input value={this.state.inputText} />
                </form>
            </div>
        );
    }

    //------------------------------------------------
    submitHandler = eventSubmit => {
        
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(
    mapStateToProps,
    {
        TO_DO_CREATE,
        TO_DO_DESTROY,
        TO_DO_COMPLETE,
    }
)(ToDo);

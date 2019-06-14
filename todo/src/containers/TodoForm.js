import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoForm extends Component {
    render(){
        return(
        <div>
        <input
            type="text"
            placeholder="Type your To Do Here"
            className="input"
        />
        <button className> Add Todo </button>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

export default connect(mapStateToProps)(TodoForm);
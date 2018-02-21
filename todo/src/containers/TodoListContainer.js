import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';


class Todo extends Component {

    render() {
        return(
            <h1>To do list</h1>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        todos: state
    };
}

export default connect(mapStateToProps, { addTodo })(Todo);
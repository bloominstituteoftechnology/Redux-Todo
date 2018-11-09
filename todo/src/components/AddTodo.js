import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div>
                <input type='text'>...Add Todo</input>
                <button>submit</button>
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
)(TodoList);
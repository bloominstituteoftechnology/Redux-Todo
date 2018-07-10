import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

    render() {
        return(
            <div>
                Placeholder Todo
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
}

export default connect(mapStateToProps)(TodoList);
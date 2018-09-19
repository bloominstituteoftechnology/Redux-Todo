import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoContainer extends Component {
    state: {}

    render() {
        return <div />;
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(mapStateToProps, {})(TodoContainer); // currying
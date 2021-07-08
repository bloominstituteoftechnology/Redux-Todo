import React from 'react';

import { connect } from 'react-redux';

const Todo = (props) => {
        console.log(this.props);
        return <div>{this.props.todo.text}</div>
};

const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

export default connect(mapStateToProps)(Todo);
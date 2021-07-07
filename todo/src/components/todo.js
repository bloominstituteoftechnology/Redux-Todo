import React, { Component } from "react";
import { connect } from 'react-redux';

class Todo extends Component {
    render () {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, {})(Todo)
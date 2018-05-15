import React, { Component } from 'react';
import { connect } from 'react-redux';

class Container extends Component {
    render() {
        console.log(this.props)
        return (

        )
    }
}


export default connect(mapStateToProps, { addTodo, toggleTodo })(Container);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doneToDo } from '../actions';
import { bindActionCreators } from 'redux';
import Complete from './completion2'

class ToDoList extends Component {
       
    renderArray() {
        return this.props.array.map((array, i) => {
            return(
            <li
            onClick={() => this.props.doneToDo()}
            key={i}>
            {array.item}
            </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderArray()}
                </ul>
        );
    }
}

    const mapStateToProps = (state) => {
        return {
            array: state.array,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({ doneToDo: doneToDo}, dispatch);
    };

    export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

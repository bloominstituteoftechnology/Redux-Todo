import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtodo } from '../actions';
import { bindActionCreators } from 'redux';

class ToDoList extends Component {
       
    renderArray() {
        return this.props.array.map((array, i) => {
            return(
                <div>
            <ul
            key={i}>
            {array}
            </ul>
            
                </div>
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
        return bindActionCreators({ addtodo: addtodo}, dispatch);
    };

    export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

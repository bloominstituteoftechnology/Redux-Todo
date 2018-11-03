import React, { Component } from "react";
import { connect } from 'react-redux';
import { add_todo, toggle_todo } from '../actions/index';

class List extends Component {
   

    render() {
        
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => this.props.add_todo() }>
                    +
                </button>
                <button onClick={() => this.props.toggle_todo() }>
                    -
                </button>
            </p>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};


export default connect(mapStateToProps, { add_todo, toggle_todo })(List);

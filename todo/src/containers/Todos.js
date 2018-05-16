import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todos extends Component {
    render(){
        if (!this.props.todo){
            return (
                <div>
                    <input type="text" placeholder="Add Todo"/>
                    <button>Submit</button>
                </div>
            );
        }
        return (
            <li>{}</li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.activeTodo
    };
};

export default connect(mapStateToProps)(Todos);
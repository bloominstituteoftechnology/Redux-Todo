import React from 'react';
import { toggleCompleteAction } from '../Actions/actions'
import { connect } from 'react-redux';

import './Components.css';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    completedHandler = (e) => {
        e.preventDefault();
        this.props.toggleCompleteAction(this.props.Id);
    }

    render() {
        return (
            <div onClick={this.completedHandler} className={`${this.props.complete}`}>
                {this.props.comment}
            </div>
        )
    }
};

export default connect(() => ({}), { toggleCompleteAction: toggleCompleteAction })(Todo)


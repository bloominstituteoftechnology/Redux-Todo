import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from './../actions';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }
    
    checkComplete = e => {
        e.preventDefault();
        this.props.toggleComplete(this.props.todo);
    }

    render() {
        console.log(this.props);
        return (
            <li  onClick={() => this.props.checkComplete(this.props.todo)}>
                
                {this.props.name} - Completed: {this.props.completed.toString()}<span className="fa fa-close"></span>
            </li>
        );
    }
    
};

const mtsp = () => {
    return {}
}

export default connect(mtsp, { toggleComplete: toggleComplete })(Todo);


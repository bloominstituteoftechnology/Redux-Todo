import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleClick } from '../actions';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    render() {
        console.log('Todo.js', this.props.todos);
        return (
            this.props.todos.map((item, index) => <div key={index} id={index} onClick={() => { item.completed = !item.completed; this.props.handleClick(index, this.props.todos) }}>{item.value}</div>)
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State', state);
    return {
        todos: state
    }
}

export default connect(mapStateToProps, { handleClick })(Todo); 

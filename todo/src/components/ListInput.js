import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveTodoItem } from '../actions';

class ListForm extends Component {
    constructor() {
        super();
        this.state = {
            itemValue: ''
        };
    }

    saveTodoItem(event) {
        event.preventDefault();
        this.props.saveTodoItem(this.state.itemValue);
        this.setState({itemValue: ''});
    }

    listValueChange(event) {
        event.preventDefault();
        this.setState({itemValue: event.target.value});
    }

    render() {
        return (
            <form className='ListInputForm' onSubmit={this.saveTodoItem.bind(this)}>
                <input type='text' placeholder='Add a new todo'
                    value={this.state.itemValue} onChange={this.listValueChange.bind(this)} />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
}

export default connect(mapStateToProps, { saveTodoItem })(ListForm);

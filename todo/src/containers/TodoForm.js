import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions'
import { clearCompleted } from '../actions'


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            completed: false,
            id: null
        };
    }
    
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    ///adding this to make a new pull request/// /
    addItem = e => {
        e.preventDefault();
        this.setState({id: Date.now()})
        this.props.addItem(this.state);
        this.setState({name: ''})
    }

    clearCompleted = e => {
        this.props.clearCompleted()
    }

    render() {
        return(
        <div>
            <input placeholder = '...todo' 
            value = {this.state.name}
            name = 'name'
            onChange = {this.handleChanges}
            />

            <button onClick = {this.addItem}>Add Todo</button>

            <button onClick = {this.clearCompleted}>Clear Completed</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, {addItem, clearCompleted})(TodoForm);
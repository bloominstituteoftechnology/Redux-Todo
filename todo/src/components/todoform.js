import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addTodo, deleteCompleted } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {fieldInput: ''};
    }

    inputHandler = (event) => {
        this.setState({
            fieldInput: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(this.state.fieldInput) {
            this.props.addTodo({value: this.state.fieldInput, completed: false});
            this.setState({fieldInput: ''});
        }
    }

    render() {
        return(
            <form onSubmit={ (e) => this.submitHandler(e) }>
                <input type='text' value={this.state.fieldInput} onChange={this.inputHandler} />
                <input type='submit' value='Add toDo' />
                <button onClick={this.props.deleteCompleted} >Delete Completed</button>
            </form>
        );
    }

}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo, deleteCompleted })(TodoForm);

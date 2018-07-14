import React from 'react';
import { Field, reduxForm } from 'redux-form'
// import { addTodo } from '../actions/index';
// import { connect } from 'react-redux'

const TodoForm = (props) => {
    console.log(props)

    console.log()
    return (
        <div>
            <form onSubmit={ props.handleSubmit }>
                <Field name ='todoText' component='input' type='text' />
                <button>Add Todo</button>
            </form>
        </div>
    );
};

// const mapStateToProps = state => ({state})
export default reduxForm({form : 'todoText'})(TodoForm);


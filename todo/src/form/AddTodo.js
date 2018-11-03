import React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../redux/actions';

const AddTodo = (props) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();

                if (!input.value) {
                    return;
                }

                props.AddTodoAction(input.value)

                input.value = '';
            }}>
                <input ref={node => input = node} />
                <button type='submit'>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = () => {
    return {};
}
export default connect(mapStateToProps, {AddTodoAction})(AddTodo);
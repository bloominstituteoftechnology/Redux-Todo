import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Todo from './Todo';

class TodoForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={() => this.props.addTodo }>
                    <fieldset>
                        <legend>Add new Todo</legend>
                            <input type="text" placeholder="Add new todo item" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

export default connect(mapStateToProps, { addTodo })(TodoForm);
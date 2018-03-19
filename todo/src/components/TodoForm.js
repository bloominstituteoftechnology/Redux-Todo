import React from 'react';

import { connect } from 'react-redux';
import { AddTodo, CompleteToDo } from '../actions';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={(elem) => {
                    elem.preventDefault();
                    this.props.AddTodo(this.state.todo);
                }}>
                    <input />
                    <button type = "submit">
                        Add Todo
                    </button>
                </form>    
            </div>   
        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, {AddTodo, CompleteToDo})(TodoForm);
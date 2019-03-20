import React from 'react';
import { connect } from 'raect-redux';

import { addNewTodo, toggleTodo } from '../actions';

class Todo extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = event => {
        this.setState({ newTodo: event.target.value });
    };

    addTodo = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    };

    toggleTodo = (event, index) => {
        event.preventDefault();
        this.props.toggleTodo(index);
    };

    render() {
        return (
            <>
                <div className='todo-list'>
                    {this.props.todo.map((todo, index) => (
                        <h3> onClick={event => this.props.toggleTodo(event, index)} key={index}>
                            {todo.string}
                        </h3>
                    ))}
                </div>
                ))}
                <input
                    type='text'
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder='Add new todo'
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </>
        );
    }    
};

const mapStateToProps = state => ({
    todo: state.todoReducer.todo
});

export default connect(
    mapStateToProps,
    {addNewTodo}
 )(Todo);
import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const todoList = props => {
    return (
        <div>
            {props.todos.map(Todo => (
                <todo key={index}
                    todo={todo}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    console.log('todoList - mSTP, state:', state);
    return {
        todo
    }
}


export default todoList;
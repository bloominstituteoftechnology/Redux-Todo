import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions'
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                {this.props.todos.map(todo => {
                   return <TodoItem todo={todo} key={Math.random()}/>
                })}
                </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};


export default connect(mapStateToProps)(TodoList);
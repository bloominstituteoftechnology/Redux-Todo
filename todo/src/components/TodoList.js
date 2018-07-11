import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                {this.props.todos.map(todo => {
                   return <TodoItem todo={todo} id={todo.id} key={todo.id}/>
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


export default connect(mapStateToProps, {toggleCompleted} )(TodoList);
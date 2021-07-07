import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from '../actions';
import NewTodo from './NewTodo';


class TodoList extends Component {
 
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div>
                <NewTodo />
                {this.props.todos.map((item, index) => { return <div key={item+index}>{item}</div>})}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

export default connect (mapStateToProps, {fetchTodos})(TodoList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodoItem, deleteTodoItem } from '../actions';

class List extends Component {
    renderList() {
        // console.log(this.props);
        return this.props.todos.map((todo, i) => {
            return (
                <li key={i}>
                    <button onClick={() => this.props.toggleTodoItem(i)}>Done</button>
                    <button onClick={() => this.props.deleteTodoItem(i)}>Delete</button>
                    <span className={todo.completed ? 'completedItem' : ''}>{todo.value}</span>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='List'>
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
}

export default connect(mapStateToProps, { toggleTodoItem, deleteTodoItem })(List);

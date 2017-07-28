import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTodoList } from './actions';

class TodoList extends Component {
    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.todos.map((todo, i) => {
                    return( 
                        <li 
                        key={i}
                        onClick={() => this.props.selectTodoList(todo)}>
                        {todo.value}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos
    };  
};

export default connect(mapStateToProps, { selectTodoList })(TodoList);
import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const Todos = (props) => {
    const todos = props.todos.map((todo, i) => <Todo todo={todo} key={i} index={i} />);
    return (
        <ul>
            { todos }
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);
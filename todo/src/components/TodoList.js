import React from 'react';
import Todo from './Todo'
import { connect } from 'react-redux';

const TodoList = props => {
    return (
        <div>
            {props.todos.map((todo, i) => <Todo todo={todo} key={i} index={i}/>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {})(TodoList);
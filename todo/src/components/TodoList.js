import React from 'react';
import { connect } from "react-redux";
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {props.todos.map((todo, i) => (
                <TodoItem key={i} todo={todo} index={i} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {todos: state.todos };
};
  
export default connect(mapStateToProps)(TodoList);
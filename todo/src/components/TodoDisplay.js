import React from "react";
import { connect } from "react-redux";

const TodoDisplay = props => {
    return (
        <ul>
            {props.todos.map((todo, index) => 
                <li>{todo.value}</li>
            )}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(TodoDisplay);
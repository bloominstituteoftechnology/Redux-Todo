import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../Actions/Index'
const Todo = (props) => {
        const {text: todo } = {...props.todo}
        const {index, deleteTodo} = { ...props};
        return (
            <div className="Todo">
                <p className="Delete" onClick={() => deleteTodo(index)}> [X] </p>
                {todo}
            </div>
        );
    };
    
    const mapStateToProps = (state) => {
        return {
            Todos: state,
        };
    };
    
    export default connect(mapStateToProps,{deleteTodo})(Todo);
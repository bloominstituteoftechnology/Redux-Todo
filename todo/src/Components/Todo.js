import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../Actions/Index'

const Toggle = (props) => {
    const {text: todo } = {...props.todo}
    const {index, LineThrough} = {...props};
    return (
        <div className="Todo">
        <p className="Line" onClick={() => LineThrough(index)}> [|] </p>
        </div>
    );
  };
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
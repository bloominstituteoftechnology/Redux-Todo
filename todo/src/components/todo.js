import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

/*
class Todo extends Component { render() {
        
        return (
            <div className="Todo">
                <span className="Todo--delete" onClick={() => this.props.deleteTodo()}>x :: </span>
                {this.props.todo.text}
            </div>
        );
    }
};
*/

const Todo = (props) => {
    const {text: todo } = {...props.todo}
    const {index, deleteTodo} = { ...props};
    return (
        <div className="Todo">
            <span className="Todo--delete" onClick={() => deleteTodo(index)}>x {index + 1}. </span>
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
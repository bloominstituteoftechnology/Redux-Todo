import React from 'react';
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';

class TodoList extends React.Component {

    toggleTodoHandler = index => {
        this.props.toggleTodo(index);
    }

    render() {
        return(
            <div>
                {this.props.todos.map((individualTodo, index) => (
                    <h2 
                        className={individualTodo.isComplete ? 'individual-todo completed' : 'individual-todo'}
                        onClick={() => this.toggleTodoHandler(index)} 
                        key={index}
                    >
                        {individualTodo.text}
                    </h2>

                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);
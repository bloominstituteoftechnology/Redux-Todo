import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';


class TodoList extends React.Component {    
    render() {
        console.log(this.props.todos);
    return (
        <div>
            <ul>
                {this.props.todos.map(todo => <li key={todo.id} onClick={() => this.props.toggleCompletedHandler(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.value}</li>)}
            </ul>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => ({
    toggleCompletedHandler: id => dispatch(toggleCompleted(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
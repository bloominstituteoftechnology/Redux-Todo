import React from 'react';
import { connect } from 'react-redux';


class TodoList extends React.Component {
    toggleCompleted = (id) => {
        this.props.todos[id].completed = !this.props.todos[id].completed;
        console.log(this.props.todos);
        this.forceUpdate();
    }
    
    render() {
        console.log(this.props.todos);
    return (
        <div>
            <ul>
                {this.props.todos.map(todo => <li key={todo.id} onClick={() => this.toggleCompleted(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.value}</li>)}
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

export default connect(mapStateToProps, null)(TodoList);
import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleComplete } from './../actions';


class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteHandler = e => {
        e.preventDefault();
        this.props.deleteTodo(this.state.todo)
    }
    toggleComplete = (e, index) => {
        e.preventDefault();
        this.props.toggleComplete(index);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <li style={{textDecoration: todo.completed ? 'line-through': 'none'}} key={index} {...todo} onClick={ e => this.toggleComplete(e, index) } > {todo.name}  - {todo.completed.toString()}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }    
}

const mstp = state => {
    return {
        todos: state.todos
    }
}

export default connect(mstp, { toggleComplete: toggleComplete })(Todos);
import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete, deleteTodo } from './../actions';


class Todos extends React.Component {
  
    deleteHandler = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index)
    }
    toggleHandler = (e, index) => {
        e.preventDefault();
        this.props.toggleComplete(index);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <li 
                                style={{
                                    textDecoration: todo.completed ? 'line-through'
                                    : 'none'}} 
                                key={index} 
                                {...todo} 
                                onClick={ e => this.toggleHandler(e, index) } > 
                                {todo.name}
                                <button onClick={ e => this.deleteHandler(e, index)}></button>
                            </li>
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

export default connect(mstp, { 
    toggleComplete: toggleComplete,
    deleteTodo: deleteTodo
})(Todos);
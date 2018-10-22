import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todo-list'>
                {this.props.todos.map(todo, i => {
                    return (
                        <Todo 
                            todo={todo} 
                            id={i}
                            className={todo.completed ? 'completed' : 'incomplete'} 
                        />
                    )
                })}
            </div>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps)(TodoList);
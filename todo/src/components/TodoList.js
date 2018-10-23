import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({todos}) => (
    <div className='todo-list'>
        {todos.map((todo, i) => {
            return (
                <Todo 
                    todo={todo} 
                    id={i}
                    key={i}
                    className={todo.completed ? 'completed' : 'incomplete'} 
                />
            )
        })}
    </div>
)
    
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps)(TodoList);
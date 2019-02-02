import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = props => {
    console.log(props, "clicked!")
    return (
       <div> 
        {props.todos.map((todo, index) =>( 
                <Todo key={index} 
                todo={todo} 
                toggleTask={props.handleToggleTask}
            />
            ))}
       </div>
    )
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(TodoList);
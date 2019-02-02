import React from 'react';
import { connect } from 'react-redux';

const Todo = props => {
    console.log(props.todo)
    return (
    <div 
         onClick={ () => props.toggleTask(props.todo.id)} 
 className={props.todo.completed ? 'taskComplete' : 'taskNotComplete' }
    >
            <h2>{props.todo.todo}</h2>
    </div>
    );
};
function mapStateToProps(state){
        return {todos: state.todos}
      }
      export default connect(mapStateToProps, {})(Todo);

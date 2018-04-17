import React from 'react';
import todos from '../reducers';
import { connect } from 'react-redux';
import Todo from "./Todo"


const DisplayTodos = props => {
    console.log('display', props.todoList)
    return (
        <div>
            <ul>

                {
                    (props.todoList === undefined)
                 ? <div>No todos yet!</div>
                  : <ul>
                      {props.todoList.map(todo => {
                    return(
                        <li>{todo}</li>
                    )
                })}
                  </ul>
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

export default connect(mapStateToProps, {todos})(DisplayTodos);

// {props.todoList.map(todo => {
//     return(
//         <div>
//             <p>{todo}</p>
//         </div>
//     )
// })}
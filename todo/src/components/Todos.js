import React from "react";
import { connect } from "react-redux";

function Todos(props) {
    console.log(props.state)
    return(
        <div>
            <ul>
                {props.todos.map( (todo) => {
                    return <li key={todo.value}>{todo.value}</li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps 
)(Todos)
import React, { Fragment} from 'react';
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <Fragment>
        {props.todos.map((todo, i) => (
        <Todo todo={todo} key={i} id={i} />
      ))}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList)
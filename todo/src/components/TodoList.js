import React from "react";
import { connect } from "react-redux";

const TodoList = props => {

    return(
        <ul>
            {props.todos.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

  const mapStateToProps = state => {
    console.log(state);
    return {
      todos: state.todos
    };
  };

export default connect(mapStateToProps, {})(TodoList);





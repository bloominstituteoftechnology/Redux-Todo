import React from "react";
import {connect}  from "react-redux";

const Todolist =props=> {

    return (
        <ul>
            {
                props.todos.map((todo, index) => {

                    return <li key={index} todo={todo}>{todo.todo}</li>
                })
            }

        </ul>

    )
}
function mapStateToProps(state){//this argument  state is store

      return {
             todos:state.todos
      }


}


export default connect(mapStateToProps)(Todolist)
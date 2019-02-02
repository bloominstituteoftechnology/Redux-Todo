import React from "react";
import {connect}  from "react-redux";
import Todo from "./Todo"
import "./Todo.css"

const Todolist =props=> {

    return (
        <ul>
            {
                props.todos.map((todo, index) => {

                    return <Todo key={index} todo={todo}></Todo>
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
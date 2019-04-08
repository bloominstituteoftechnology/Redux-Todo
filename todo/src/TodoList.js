import React from "react";
import {connect}  from "react-redux";///with connect we get the
import Todo from "./Todo"
import "./Todo.css"

const Todolist =props=> {

    console.log(props);
    return (

        <ul>
            {
                props.myTodos.map((todo) => {

                    return <Todo key={todo.id} todo={todo}></Todo>
                })
            }

        </ul>

    )
}
function mapStateToProps(state){//this argument  state is store

      console.log("In mapStateToProps of Todolist ")
      return {
             myTodos:state.todos,
             title : state.title,
             x: 10
      }
}


//x = connect(mapStateToProps)
//x(Todolist)
//fuction connect  argument as mstpr   which is a function which returns the relevant data of state to the
// components who needs ; it  is passed as a  props to the components which are passed as an argument
// in the second call of connect;here it is TOdolist

export default connect(mapStateToProps)(Todolist)
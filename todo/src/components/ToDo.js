import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { completedTodo, deleteTodo } from "./actions";

const DeleteButton = styled.button`
  background: red;
`;
const TodoItem = styled.div`
    text-decoration:${props => (props.item.completed ? "line-through" : "none")}
     .completed {
     p {
         text-decoration:line-through;
     }
 }
     .not-completed {
     p{
         text-decoration:underline;
     }
 }
`
const Todo = (props) => {
    return (
        <>
        <div onClick={() => {props.completedTodo(props.item.id)} }><p>{props.item.name}</p></div>
        <DeleteButton onClick={() => {props.deleteTodo(props.item.id)}}>Delete</DeleteButton>
        </>
    )
}
const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  { completedTodo, deleteTodo }
)(Todo);

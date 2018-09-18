import React from 'react' ;
import Todo from './Todo';
import { connect } from 'react-redux'; 
import { toggleTodo} from "../actions";

 const TodoList = (props) => {
    return (
        <div className = "todoList">
            <ul>
            {props.todos.map((item, index) => {
                   return <Todo styleTodo = {{textDecoration: item.completed ? 'line-through': 'none'}} click = {() => props.toggleTodo(item.id)} todoItem = {item.task} key = {item.id} />
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      todos: state.todos
  }
}
export default connect(mapStateToProps, {toggleTodo} )(TodoList); 
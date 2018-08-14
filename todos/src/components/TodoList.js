import React from 'react' ;
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className = "todoList">
            <ul>
                {this.props.todoData.map((item, index) => {
                    <Todo  onClick = {props.toggle} todoItem = {item.task} key = {item.id} />
                })}
            </ul>
        </div>
    )
}

export default TodoList; 

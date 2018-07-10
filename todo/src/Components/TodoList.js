import React from 'react'
import { Button } from 'reactstrap';

const TodoList = props => {
    return (
        <div>
            {console.log('todolist', props)}
            {props.todos.map((todo, index) => {
                return (
                    <div className="todos" key={todo.value + index}>
                        {todo.value}
                        <Button color="success" onClick={() => props.remove({ value: todo.value })} className={todo.complete? "button button-delete" : "button-disabled button-delete"} > X </Button>
                    </div>)
            })}

        </div>
    );
};

export default TodoList;
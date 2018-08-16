import React from 'react'; 

export default function AddTodo(props){
    return(
        <div>
            <form onSubmit={props.addTodoHandler}>
                <input 
                    onChange={props.inputChangeHandler}
                    type="text"
                    value={props.newTodoInput}
                    placeholder="New Todo"/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}
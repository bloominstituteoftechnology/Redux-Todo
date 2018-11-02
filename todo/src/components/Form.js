import React from 'react'
import TodoList from './TodoList'

const Form = () =>{

    return (
        <div>
            <form onSubmit={()=>{}}>
                <input type="text" placeholder="Add todo"/>
                <button type="submit">Add Todo</button>
            </form>

            <div>
                <TodoList />
            </div>
        </div>
    )

}

export default Form
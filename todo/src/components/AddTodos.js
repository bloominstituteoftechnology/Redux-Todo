import React from 'react';


//a submit button and input form, stateless w/ action = ADD_TODO
export default function AddTodo(props) {
        return (
            <div>
                <h1>My Todo List!</h1>
                <div className="theTodoListBox">
                    <form>
                        <input
                            onChange={props.handleInputChange}
                            placeholder="what are we doing?..."
                            value={props.todotext}
                            name="todoItem"
                        />
                        <button type="button" onClick={props.addTodo}> adding stuff...</button>  
                    </form>
                </div> 
            </div>
        );
    }


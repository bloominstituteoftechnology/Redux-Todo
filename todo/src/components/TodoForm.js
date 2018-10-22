import React from 'react';

class TodoForm extends React.Component(){
    constructor(){
        super();
        this.state={};
    }
    render(){
        return(
            <div className="todo-form">
                <form>
                    <input type="text" placeholder="add new todo"/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default TodoForm;
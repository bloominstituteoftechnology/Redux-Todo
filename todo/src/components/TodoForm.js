import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            inputText : '',
        };
    }

    onChangeHandler = e => {
        e.preventDefault();
        this.setState({
            inputText : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        //Put a function in here to change the state of the application through props, make sure to have a value that passes in
    }

    render(){
        return(
            <div className="todo-form">
                <form onSubmit={this.onChangeHandler}>
                    <input type="text" placeholder="add new todo"/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default TodoForm;
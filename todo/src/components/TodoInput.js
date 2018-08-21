import React, { Component } from 'react';

class TodoInput extends Component {
    state = { 
        inputValue: "",
        todos: []
     }

    handleText = event => {
        this.setState({[event.target.name]: event.target.value})
    } 

    handleSubmit = event => {
        event.preventDefault()
        const todos = [...this.state.todos]
        todos.push(this.state.inputValue)
        this.setState({
            todos
        })
    } 



    render() { 
         
        return (
            <div>
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleText} name='inputValue' type="text" placeholder="type here" />
                <button>Add</button>
            </form> );
            {this.state.todos.map({todo, index} => {
                return (
                    <div key={index}>
                        {todo}
                    </div>
                )
            })}
            </div>
    }
}
 
export default TodoInput;
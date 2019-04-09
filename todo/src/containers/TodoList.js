import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleTodo, deleteTodo } from '../actions/Action'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            inputValue: ""
        }
    }

    changeInputValue = e => {
        this.setState({ inputValue: e.target.value })
    }
    
    createNewTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue)
        this.setState({ inputValue: ""})
    }

    toggleItem = (e, index) => {
        e.preventDefault()
        this.props.toggleTodo(index)
    }

    deleteItem = (e, index) => {
        e.preventDefault()
        this.props.deleteTodo(index)
    }

    render() {
        return (
            <div>          
                <form onSubmit={this.createNewTodo}>
                    <input 
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.changeInputValue}
                    />
                    <button type="submit">Add Todo</button>
                    <div>
                        {this.props.todos.map((todoItem, index) => {
                            return <li 
                            style={{ textDecoration: todoItem.complete ? 'line-through' : 'none'}}
                            onClick={e => this.toggleItem(e, index)} key={index}>{todoItem.todo}
                                <button onClick={e => this.deleteItem(e, index)} key={index}>X</button>
                            </li>
                        })}
                    </div>
                </form>                      
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(TodoList)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleTodo } from '../actions/Action'

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
                    
                    {this.props.todos.map((todoItem, index) => {
                        return <li onClick={e => this.toggleItem(e, index)} key={index}>{todoItem.todo}</li>
                    })}
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

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList)
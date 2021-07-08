import React from 'react'
import { connect } from 'react-redux'
import { addTodo, ADDTODO } from '../actions/index'

class AddTodo extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            title: ''
        }
    }

    handleOnInputChnage = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAdd = (event) => {
        event.preventDefault()
        console.log(this.props)
        const newTodo = {
            id: this.props.todos.length,
            title: this.state.title
        }
        this.props.dispatch(addTodo(newTodo))
    }

    render(){
        return (
            <div>
                <input type="text" name="title" onChange={this.handleOnInputChnage}/>
                <button onClick={this.handleAdd}>Add Todo</button>
            </div>
        )
    }
}

export default AddTodo
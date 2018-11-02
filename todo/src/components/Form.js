import React from 'react'
import {connect} from 'react-redux'

import TodoList from './TodoList'
import {addTodo} from '../actions/actions.js'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todoText:''
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    clickHandler = (e) =>{
        e.preventDefault()
        if(this.state.todoText !== ''){
            this.props.addTodo(this.state.todoText)
        }
        this.setState({todoText: ''})

    }

    render(){

        return (
            <div>
                <form onSubmit={this.clickHandler}>
                    <input type="text" 
                        placeholder="Add todo" 
                        onChange={this.changeHandler}
                        name="todoText"
                        value={this.state.todoText}/>
                    <button type="submit">Add Todo</button>
                </form>
    
                <div>
                    <TodoList />
                </div>
            </div>
        )
    }

}

    const mapStateToProps = state => {
        return {}
    }


export default connect(mapStateToProps, {addTodo})(Form)


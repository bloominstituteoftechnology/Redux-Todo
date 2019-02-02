import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
                inputValue: ""
            }
        }
    
    changeInput = e => {
        this.setState( {
            inputValue: e.target.value
        })
    }

    createNewTodo = e => {
        e.preventDefault();
        // console.log("HI FROM CREATETODO! FIRST STEP SENDING TO ACTIONS!")
        // console.log(this.state.inputValue)
        this.props.addTodo(this.state.inputValue)
        this.setState({ inputValue: "" })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <form onSubmit={this.createNewTodo}>
                    <input
                        type= "text"
                        value = {this.state.inputValue}
                        onChange = {this.changeInput}
                    />
                    <button type="submit">Add</button>
                </form>
                <div>
                    {this.props.todo.map((todoItem, index) => {
                        return (
                            <div>
                                <li>{todoItem.todo}</li>
                                <button>Finished</button>
                            </div>
                        )                        
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todos
    }
}

export default connect(mapStateToProps, {addTodo})(ToDoList);
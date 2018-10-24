import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { addTask, toggleCompletion } from '../Actions/actionsIndex'

class Todo extends React.Component {
    // original method:

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         inputText: ""
    //     }
    // }

    state = {
        input: ""
    }

    handleChangeEvent = event => this.setState({ input: event.target.value})

    addTask = event => {
        event.preventDefault()
        this.props.addTask(this.state.input)
    }

    toggleCompletion = index => {
        this.props.toggleCompletion(index)
    }

    render() {
        return (
            <div>
                <TodoList 
                    input={this.state.input}
                    handleChangeEvent={this.handleChangeEvent}
                    todos={this.props.todos}
                    addTask={this.addTask}
                    toggleCompletion={this.toggleCompletion}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(
    mapStateToProps, 
    { addTask, toggleCompletion }
)(Todo)
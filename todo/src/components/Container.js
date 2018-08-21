import React from "react";
import { connect } from "react-redux";
import { addTodo } from '../actions'

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleAddTodo = event => {
        event.preventDefault();
        event.target.reset();
        this.props.addTodo(this.state.task)
        this.setState( {task:'',})
    }

    render() {
        return (
            <div>
            <div>
                {this.props.todos.map(todo => {
                    return <p>{todo.text}</p>
                })}
            </div>
            <form onSubmit={this.handleAddTodo}>
                <input onChange={this.handleInputChange} name="task" type="text" placeholder="type a todo item"/>
                <button type="submit">add todo</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, {addTodo})(Container) 
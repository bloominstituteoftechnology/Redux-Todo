import React, {Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.text);
    }

    addToDoHandler = (e) => {
        e.preventDefault();
        const newTodo = {text: this.state.text, completed: false, id: Date.now()}
        this.props.addTodo(newTodo);
        this.setState({text: ''});
    }

    render() {
        console.log('Todo List', this.props)
        return (
            <form>
                <input type="text" value={this.state.text} name='text' onChange={this.inputHandler}/>
                <button onClick={this.addToDoHandler}>Add</button>
            </form>
            // {this.props}
        );
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {addTodo})(TodoList);
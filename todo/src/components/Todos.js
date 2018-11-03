import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteTodo } from '../actions/action';
import { toggleCompleted } from '../actions/action';

const Todo = styled.div`
${props => props.completed ? `text-decoration: line-through red` : null}
`


class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    componentDidMount() {
        localStorage.getItem('todos') ? localStorage.getItem('todos') && this.setState({ todos: JSON.parse(localStorage.getItem('todos'))}) 
        : this.setState({todos: [...this.props.todos]})
    }

    componentWillUpdate(nextProps, state) {
        localStorage.setItem('todos', JSON.stringify(state.todos))
    }

    render() {
        return  <ul>
                    {this.state.todos.map(todo => <Todo completed={todo.completed} 
                    onClick={() => this.props.toggleCompleted(todo.id)}>{todo.todoText}
                    <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button></Todo>)}
                </ul>
    }
}

const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(mapStateToProps, { toggleCompleted, deleteTodo })(Todos)
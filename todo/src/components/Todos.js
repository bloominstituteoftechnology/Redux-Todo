import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteTodo } from '../actions/action';
import { toggleCompleted } from '../actions/action';
import { pullingLocalStorage } from '../actions/action';

const Todo = styled.div`
${props => props.completed ? `text-decoration: line-through red` : null}
`


class Todos extends React.Component {


    componentDidMount() { 
        this.props.pullingLocalStorage(JSON.parse(localStorage.getItem('todos')))
    }

    componentWillUpdate(nextProps, state) {
        localStorage.setItem('todos', JSON.stringify(this.props.todos))
    }

    render() {
        return  <ul>
                    {this.props.todos.map(todo => <Todo key={todo.id} completed={todo.completed} 
                    onClick={() => this.props.toggleCompleted(todo.id)}>{todo.todoText}
                    <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button></Todo>)}
                </ul>
    }
}

const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(mapStateToProps, { toggleCompleted, deleteTodo, pullingLocalStorage })(Todos)
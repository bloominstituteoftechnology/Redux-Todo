import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodos, toggleTodo } from '../actions'

import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.button`
    width: 45%;
    background-color: lightcoral;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
`;

const TodoPaper = styled.div`
  background: #fff;
  box-shadow:
    /* The top layer shadow */
    0 1px 1px rgba(0,0,0,0.15),
    /* The second layer */
    0 10px 0 -5px #eee,
    /* The second layer shadow */
    0 10px 1px -4px rgba(0,0,0,0.15),
     /* The third layer */
    0 20px 0 -10px #eee,
    /* The third layer shadow */
    0 20px 1px -9px rgba(0,0,0,0.15);
    /* Padding for demo purposes */
    padding: 30px;
`;

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    };

    inputHandler = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    toggleHandler = todoId => {
        this.props.toggleTodo(todoId);
    }

    removeHandler = () => {
        this.props.removeTodos();
    }

    addHandler = (event) => {
        event.preventDefault();

        const { text } = this.state;
        
        const newTodo = {
            text,
            completed: false,
            id: this.props.todos.length + 1
        }
        
        this.props.addTodo(newTodo);
        this.setState({
            input: ''
        })

    }

    render() {
        return (
            <TodoPaper>
                <Title>Colin's Todo List</Title>
                <form>
                    <input
                        name="text"
                        value={this.state.text}
                        onChange={this.inputHandler}
                        autoComplete='off'
                    />
                    <ButtonContainer>
                        <Button 
                            type="button"
                            onClick={this.addHandler}
                        >
                            Add
                        </Button>
                        <Button onClick={() => this.removeHandler()}>Clear</Button>
                    </ButtonContainer>
                </form>
                <ul>
                    {this.props.todos.map( todo => {
                        return (
                            <li
                                onClick={() => this.toggleHandler(todo.id)}
                                key={todo.id}
                                style={
                                    todo.completed ?
                                    { textDecoration: "line-through"} :
                                    null
                                }
                            >
                                {todo.text}
                            </li>
                        )
                    })}
                </ul>
            </TodoPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {
    addTodo,
    removeTodos,
    toggleTodo
})(TodoList);
import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components'

const Form = styled.form`
        width: 30vw;
        border-radius: 5px;
        border: solid 1px black;
        padding: 10px;
        align-self: center;
        display: flex;
        overflow: hidden;
        height: 20px;
        input {
            border: none;
            flex-grow: 1;
        }
        button {
            content: '+';
            display: flex;
            color: white;
            font-size: 35px;
            width: 10%;
            border: none;
            background: limegreen;
            justify-self: flex-end;
            margin: -10px -10px -10px 0;
            justify-content: center;
            align-content: center;
            padding: 0;
        }
`
class TodoForm extends Component {

    constructor(props) {
        super()
        this.state = { input: '' }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTask({ text: this.state.input, id: shortid.generate() })
        this.setState({
            input: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    value={this.state.input}
                    placeholder="Add new task..."
                    name="input"
                    onChange={(event) => this.handleChange(event)} />
                <button type="submit">+</button>
            </Form>
        )
    }
};

export default TodoForm;
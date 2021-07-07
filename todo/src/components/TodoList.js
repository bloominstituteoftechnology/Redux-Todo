import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';

import { addTodo, deleteTodo } from '../actions';
import { Todo } from './Todo'
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <Container className="Content">
                <Row>
                    <h1>Todo List</h1>
                </Row>
                <Row className="TodoList__Row">
                    <Col className="TodoList__Col">
                        {this.props.todos.map(todo => {
                            return (
                            <Todo key={todo.id} todo={todo} 
                            deleteTodo={this.props.deleteTodo}/>
                            )
                    })}</Col>
                </Row>
                <Form className="TodoList__Create_" onSubmit={this.handleSubmit}>
                    <FormGroup className="TodoList__Create__Group">
                        <Input placeholder="Do something!" onChange={this.handleChange} type="text" value={this.state.text} />
                        <Input type="submit" />
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { addTodo, deleteTodo })(TodoList);
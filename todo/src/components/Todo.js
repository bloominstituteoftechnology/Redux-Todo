import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col,Button } from 'reactstrap';

import './Todo.css';

export class Todo extends Component {
    state = {
        done: false
    }

    render() {
        return (
            <Row className='Todo'>
                <Col xs='12' md='8'>
                    <h4 className={`Todo__text ${this.state.done ? 'Done' : ''}`}
            onClick={() => this.setState({done: !this.state.done})}>{this.props.todo.text}</h4>
                </Col>
                <Col xs='12' md='4'>
                    <Button color='deoco' className='Todo__delete' onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</Button>
                </Col>
            </Row>
        );
    }
}

export default Todo;
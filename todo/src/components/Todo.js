import React, { Component } from 'react';
import {Container, Row, Col, Form, Input, Button} from 'reactstrap';
import {add , remove} from '../actions';
import {connect} from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        };
    }

    handleInput = (e) => {
        this.setState({ newTodo: e.target.value });
    }
    handleClick = (e) => {
        this.props.add(this.state.newTodo);
        this.setState({ newTodo: '' });
    }
    
    render() {
        return (
            <Container>
                <Form>
                    <Input
                        onChange={this.handleInput}
                        value={this.state.newTodo}
                        name="new-task"
                        placeholder="Add new task..."

                    />
                    <Button onClick={this.handleClick} >Add todo</Button>
                </Form>
                {this.props.todos.map(
                    (todo, i) => (<Row key={i} ><Col>{todo}</Col></Row>)
                )}
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {add, remove})(Todo);
import React, { Component } from 'react';
import {Container, Row, Col, Form, FormGroup, Input, Button, Badge} from 'reactstrap';
import {add , remove, toggle} from '../actions';
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
    handleAdd = (e) => {
        // console.log(e.type);
        // console.log(e.key);
        if(e.type === 'click' || e.key === 'Enter'){
            e.preventDefault();
            this.props.add(this.state.newTodo);
            this.setState({ newTodo: '' });
        }
        e.stopPropagation();
    }

    handleToggle = (e) => {
        const item = document.querySelector(`#${e.target.id}`);
        this.props.toggle(item.dataset.index); // WORKS


    }
    
    handleRemove = (e) => {
        this.props.remove(e.target.dataset.index);
        e.stopPropagation();
    }

    /** Make the delte button appear on hover */
    handleMouseEnter = (e) => {
        const index = e.target.dataset.index;
        const badge = document.querySelector(`#badge${index}`)
        badge.classList.remove("invisible");
        badge.classList.add("visible");
        
    }
    handleMouseLeave = (e) => {
        const index = e.target.dataset.index;
        const badge = document.querySelector(`#badge${index}`)
        badge.classList.remove("visible");
        badge.classList.add("invisible");

    }

    render() {
        const todos = this.props.todos.slice().reverse();
        let length = todos.length - 1;
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Input
                            onKeyPress={this.handleAdd} 
                            onChange={this.handleInput}
                            value={this.state.newTodo}
                            name="new-task"
                            placeholder="Add new task..."

                        />
                    </FormGroup>
                    <Button onClick={this.handleAdd} >Add</Button>
                </Form>
                {todos.map(
                    (todo, i) => (<Row
                                    style={{cursor: "pointer"}}
                                    key={i}
                                    onClick={this.handleToggle}
                                    >
                                        {/* data-finished="no" */}
                                    <Col
                                        className={todo.done ? 'taskDone' : ''}
                                        id={`task-${i}`}
                                        data-index={length--}
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                    >
                                        {todo.name}
                                        <Badge
                                            className="invisible"
                                            onClick={this.handleRemove}
                                            color="danger"
                                            data-index={length + 1}
                                            id={`badge${length + 1}`}
                                        >Delete
                                        </Badge>
                                    </Col>
                                </Row>)
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

export default connect(mapStateToProps, {add, remove, toggle})(Todo);
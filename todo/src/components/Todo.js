import React, { Component } from 'react';
import {Container, Row, Col, Form, Input, Button, Badge} from 'reactstrap';
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
        e.preventDefault();
        this.setState({ newTodo: e.target.value });
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.add(this.state.newTodo);
        this.setState({ newTodo: '' });
    }

    handleToggle = (e) => {
        // console.log(e.target);
        // console.log(e.target.id);
        // console.log("index",e.target.dataset.index);
        const item = document.querySelector(`#${e.target.id}`);
        // console.log("item",item);
        // console.log(item.classList);

        let itemClasses = item.classList;
        // console.log(itemClasses.contains("taskDone"))
        // if (itemClasses.contains("taskDone")) {
        //     // this.props.toggle(e.target.dataset.index); // WORKS
        //     // item.toggle("taskDone");
        // }
        this.props.toggle(item.dataset.index); // WORKS


    }
    
    handleRemove = (e) => {
        // console.log(e.target.dataset.index);
        this.props.remove(e.target.dataset.index);
        e.stopPropagation();
    }

    /** Make the delte button appear on hover */
    toggleDelete = (index) => {
        const badge = document.querySelector(`#badge${index}`)
        console.log(badge);
        // badge.style.display = 'none';
    }
    handleMouseEnter = (e) => {
        console.log(e.type);
        const index = e.target.dataset.index;
        // this.toggleDelete(index);
        const badge = document.querySelector(`#badge${index}`)
        console.log(badge);
        badge.classList.remove("invisible");
        badge.classList.add("visible");
        
    }   
    
    handleMouseLeave = (e) => {
        console.log(e.type);
        const index = e.target.dataset.index;
        // this.toggleDelete(index);
        const badge = document.querySelector(`#badge${index}`)
        console.log(badge);
        badge.classList.remove("visible");
        badge.classList.add("invisible");

    }

    render() {
        const todos = this.props.todos.slice().reverse();
        let length = todos.length - 1;
        return (
            <Container>
                <Form>
                    <Input
                        onChange={this.handleInput}
                        value={this.state.newTodo}
                        name="new-task"
                        placeholder="Add new task..."

                    />
                    <Button onClick={this.handleClick} >Add</Button>
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
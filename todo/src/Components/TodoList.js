import React, { Component } from "react";
import { connect } from 'react-redux';
import {add_list_item, check_complete, remove_list_item}  from '../Actions/index';
import { Button, Glyphicon, Label, ListGroup, ListGroupItem, Grid, Row, Col, PageHeader } from 'react-bootstrap';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newMsg: ''
    };
  }
  submitter = (event) => {
    if(this.state.newMsg !== '') {
      event.preventDefault();
      this.props.add_list_item(this.state.newMsg);
      this.setState({
        newMsg: ''
      });
    }
  }
  handleNewItem = (event) => {
    this.setState({
      newMsg: event.target.value
    });
  }
  labeler = (isComplete) => {
    if(isComplete) {
      return "success";
    }
    return "default";
  }
  render() {
    return (
      <div>
        <Grid>
          
          <Col md={4}></Col>
            <Col md={4}>
              <Row>
                <ListGroupItem>
                  <PageHeader> Todo List <small> Never forget... </small></PageHeader>
                </ListGroupItem>
              </Row>
              <Row>

                <Col>
                  <ListGroup>  
                    {this.props.todos.map((todo, index) => {
                      return (
                        <ListGroupItem>
                          <Label bsStyle={this.labeler(todo.isComplete)}>
                            <span key={index} onClick={() =>  this.props.check_complete(todo.value)} >
                              {todo.value} 
                            </span>
                          </Label>

                          <Button bsSize="xsmall" onClick={() => this.props.remove_list_item(todo.value)}> <Glyphicon glyph="remove"/> </Button>
                        </ListGroupItem>
                      )
                    })}
                  </ListGroup>
                </Col>
                
                
              </Row>

              <Row>
                <ListGroupItem>
                  <form onSubmit={this.submitter}>
                    <input type="text" onChange={this.handleNewItem} placeholder="Add a new todo!" value={this.state.newMsg}></input>
                    <Button onClick={this.submitter}>Click Here</Button>
                  </form>
                </ListGroupItem>
              </Row>
              
            </Col>
          <Col md={4}></Col>
          

          
        </Grid>
        
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
};

export default connect(mapStateToProps, { add_list_item, check_complete, remove_list_item })(TodoList);
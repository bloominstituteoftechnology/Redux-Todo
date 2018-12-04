import React, { Component } from 'react';
import styled from 'styled-components';
import { addItem as actionAddItem } from '../actions';
import { connect } from 'react-redux';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  width: 500px;
  margin: 25px auto;
`;

const FormAddItem = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const H1FormAddItemTitle = styled.h1`
  text-align: center;
`;

const InputTodoText = styled.input`
  margin-bottom: 25px;
  width: 400px;
`;
const InputTodoButton = styled.input`
  margin-bottom: 25px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  outline: none;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      completed: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetState = () => {
    this.setState({
      id: 0,
      title: '',
      completed: false
    });
  };

  submitHandler = ev => {
    ev.preventDefault();
    console.log(this.props);
    const newItem = {
      id: this.props.todoList[this.props.todoList.length - 1].id + 1,
      name: this.state.title,
      completed: this.state.completed
    };
    this.props.addItem(newItem);
    this.resetState();
  };

  render() {
    return (
      <DivWrapper>
        <FormAddItem onSubmit={this.submitHandler}>
          <H1FormAddItemTitle>Add Item</H1FormAddItemTitle>
          <InputTodoText
            type='text'
            placeholder='Name of todo item'
            name='title'
            value={this.state.title}
            onChange={this.changeHandler}
            autoComplete='off'
          />
          <InputTodoButton type='submit' value='Add Item' />
        </FormAddItem>
      </DivWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const withStateConnect = connect(
  mapStateToProps,
  { addItem: actionAddItem }
);
const HOC = withStateConnect(ToDoForm);

export default HOC;

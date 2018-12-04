import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
`;

const DivToDo = styled.div`
  margin: 10px;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  h3 {
    text-align: center;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const ToDoList = props => {
  console.log(props);
  return (
    <DivWrapper>
      {props.todoList.map(item => (
        <DivToDo>
          <h3>{item.name}</h3>
          <p>completed: checked/unchecked</p>
        </DivToDo>
      ))}
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const withStateConnect = connect(mapStateToProps);
const HOC = withStateConnect(ToDoList);

export default HOC;

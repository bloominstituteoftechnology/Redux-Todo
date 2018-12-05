import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

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
  background: ${props =>
    props.completed === 'false' ? `rgba(0, 0, 0, 0.2)` : `rgba(0, 0, 0, 0.8)`};
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  color: ${props => (props.completed === 'false' ? `black` : `white`)};

  &:hover {
    background: ${props =>
      props.completed === 'false'
        ? `rgba(0, 0, 0, 0.06)`
        : `rgba(0, 0, 0, 0.65)`};
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
        <DivToDo
          completed={`${item.completed}`}
          onClick={() => props.toggleComplete(item.id)}
        >
          <h3>{item.name}</h3>
          <p>completed: {item.completed ? 'complete' : 'incomplete'}</p>
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

const withStateConnect = connect(
  mapStateToProps,
  { toggleComplete }
);
const HOC = withStateConnect(ToDoList);

export default HOC;

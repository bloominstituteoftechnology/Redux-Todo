import React from 'react';
import {connect} from 'react-redux';
import {completedToDo} from '../actions/actions.js';

const TheToDo = props => {
  const eHandler = e => {
    props.completedToDo(e.target.dataset.tab);
  };
  return (
    <div className={props.completed === true ? 'completed' : 'notCompleted'}>
      <li className="todo">
        <p className="theTodo" data-tab={props.theId} onClick={eHandler}>
          Task: {props.todo}
        </p>
        <p className="toDoDate">Due Date: {props.date}</p>
      </li>
    </div>
  );
};

const mapPropsToState = state => {
  return {};
};

export default connect(
  mapPropsToState,
  {completedToDo},
)(TheToDo);

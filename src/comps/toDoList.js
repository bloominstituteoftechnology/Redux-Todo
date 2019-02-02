import React from 'react';
import TheToDo from './toDo.js';
import {connect} from 'react-redux';

const ToDoList = props => {
  return (
    <div className="listCont">
      {props.toDos.length > 0 ? (
        <ul className="toDoList">
          {props.toDos.map((todo, index) => {
            return (
              <TheToDo
                key={todo.value + todo.date}
                todo={todo.value}
                date={todo.date}
                theId={index}
                completed={todo.completed}
              />
            );
          })}
        </ul>
      ) : (
        <div>No To Dos</div>
      )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    toDos: state.todos,
  };
};

export default connect(mapPropsToState)(ToDoList);

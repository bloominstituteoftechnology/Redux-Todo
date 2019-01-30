import React from 'react';
import { connect } from 'react-redux';
import { toggleActive } from '../actions';

const ToDoList = props => {
  const toggleHandler = e => {
    const listArr = props.todos.slice();
    const resultArr = listArr.filter(item => item.id === Number(e.target.id));

    resultArr[0].completed = !resultArr[0].completed;

    props.toggleActive(listArr)
  }

  return(
    <div>
      {props.todos.map(item => {
        return <h2 className={item.completed === true ? 'show' : 'hide'}
                   onClick={toggleHandler}
                   key={item.id}
                   id={item.id}> {item.text} </h2>
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { toggleActive })(ToDoList);

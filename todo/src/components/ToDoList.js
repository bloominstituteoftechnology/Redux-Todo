import React from 'react';
import { connect } from 'react-redux';
import { toggleActive, deleteItem } from '../actions';

const ToDoList = props => {
  const toggleHandler = e => {
    const listArr = props.todos.slice();
    const resultArr = listArr.filter(item => item.id === Number(e.target.id));

    resultArr[0].completed = !resultArr[0].completed;

    props.toggleActive(listArr)
  }

  const deleteItem = e => {
    const listArr = props.todos.slice();
    const searchItem = listArr.filter(item => item.id === Number(e.target.id))

    listArr.splice(listArr.indexOf(searchItem[0]), 1)

    props.deleteItem(listArr);
  }

  return(
    <div>
      {props.todos.map(item => {
        return <div key={item.id} className='item-container'>
                <h2 className={`item-container__${item.completed === true ? 'show' : 'hide'}`}
                    onClick={toggleHandler}
                    id={item.id}> {item.text} </h2>

                <p id={item.id}
                   onClick={deleteItem}> &times; </p>
               </div>
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { toggleActive, deleteItem })(ToDoList);

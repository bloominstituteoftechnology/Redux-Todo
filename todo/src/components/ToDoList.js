import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleActive,
         deleteItem,
         deleteAll,
         sortedArr } from '../actions';

const ToDoList = props => {

  const sortArray = arr => {
    const newArr = arr.slice();

    const sortedArr = newArr.sort((a,b) => {
      if(isNaN(Number(a.text))) {
        return 1
      } else {
        return -1;
      }
    })

    let numArr;

    for(let i = 0; i < sortedArr.length; i++) {

      if(isNaN(Number(sortedArr[i].text))) {
        numArr = sortedArr.splice(0, i)

        numArr.sort((a,b) => Number(a.text)-Number(b.text));

        sortedArr.sort((a,b) => {
          const nameA = a.text.toUpperCase();
          const nameB = b.text.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })

        return numArr.concat(sortedArr)
      }
    }
  }

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

  const sortUpHandler = () => {
    const result = sortArray(props.todos);

    props.sortedArr(result)
  }

  const sortDownHandler = () => {
    const result = sortArray(props.todos).reverse();

    props.sortedArr(result)
  }

  const deleteAllHandler = () => {
    props.deleteAll();
  }

  return(
    <div className='list-items'>
      <div className='list-container'>
        {props.todos.map(item => {
          return <div key={item.id} className='item-container'>
                  <h2 className={`item-container__${item.completed ? 'show' : 'hide'}`}
                      onClick={toggleHandler}
                      id={item.id}> {item.text} </h2>

                  <p id={item.id}
                     onClick={deleteItem}> &times; </p>
                 </div>
        })}

        <Link to='/'><button>Back</button></Link>
        <button onClick={deleteAllHandler}>Remove All</button>
        <button onClick={sortUpHandler}>Sort <span>&#x21e7;</span></button>
        <button onClick={sortDownHandler}>Sort <span>&#x21e9;</span></button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { toggleActive,
                                          deleteItem,
                                          deleteAll,
                                          sortedArr } )(ToDoList);

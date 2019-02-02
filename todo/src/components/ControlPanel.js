import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteAll,
         sortedArr,
         sortComp,
         deleteComp } from '../actions';
         
const ControlPanel = props => {
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

  const sortCompHandler = () => {
    const newList = [ ...props.todos ]

    newList.sort((a,b) => a.completed && !b.completed ? -1 : 1)

    props.sortComp(newList);
  }

  const sortNotCompHandler = () => {
    const newList = [ ...props.todos ]

    newList.sort((a,b) => a.completed && !b.completed ? -1 : 1).reverse();

    props.sortComp(newList);
  }

  const deleteCompHandler = () => {
    const newList = [ ...props.todos ]

    const result = newList.filter(item => item.completed === false);

    props.deleteComp(result);
  }

  return(
    <div>
      <Link to='/'><button>Back</button></Link>
      <button onClick={deleteAllHandler}>Remove All</button>
      <button onClick={deleteCompHandler}>Remove &#x2714;</button>
      <button onClick={sortUpHandler}>Sort <span>&#x21e7;</span></button>
      <button onClick={sortDownHandler}>Sort <span>&#x21e9;</span></button>
      <button onClick={sortCompHandler}>Sort <span>&#x2714;</span></button>
      <button onClick={sortNotCompHandler}>Sort <span>&#x2718;</span></button>
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { deleteAll,
                                          sortedArr,
                                          sortComp,
                                          deleteComp })(ControlPanel);

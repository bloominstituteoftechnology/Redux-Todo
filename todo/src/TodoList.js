import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.css';
// import { addTodoItem } from './actions';

class TodoList extends Component {
  render() {
    // console.log(this.props);
    return (
      <article>
        <h2 className='title'>A list of very important things!</h2>
        <h3 className='title'>All of which need doing:</h3>
        <ol>
          {this.props.listItems.map((item, i) => {
            return (
              <li key={i}>
                {item.todoText}
              </li>
            )
          })}
        </ol>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems
  };
}

export default connect(mapStateToProps)(TodoList);

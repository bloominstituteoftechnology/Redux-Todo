import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, toggleToDo, deleteToDo } from '../actions';
import './ItemList.css';

class ItemList extends Component {
  ifCompleted = completed => {
    if (completed === true) return <div>&#10004;</div>;
    return <div>x</div>;
  };

  toggleToDo = (event, todo) => {
    event.preventDefault();
    this.props.toggleToDo(todo);
  };

  toggleButton = completed => {
    if (completed === true) return <div>uncheck</div>;
    return <div>check</div>;
  };

  deleteToDo = (event, todo) => {
    event.preventDefault();
    this.props.deleteToDo(todo);
  };

  render() {
    return (
      <div className="toDoContainer">
        <ul className="toDoList">
          {this.props.toDoList.map(todo => {
            return (
              <div className="toDoItem">
                <div className="checkBox">
                  {this.ifCompleted(todo.completed)}
                </div>
                <div className="toDoText">{todo.text}</div>
                <div className="completeButtonContainer">
                  {
                    <button
                      className="completeButton"
                      onClick={event => {
                        this.toggleToDo(event, todo);
                      }}
                    >
                      {this.toggleButton(todo.completed)}
                    </button>
                  }
                </div>
                <div className="deleteButtonContainer">
                  {
                    <button
                      className="deleteButton"
                      onClick={event => this.deleteToDo(event, todo)}
                    >
                      delete
                    </button>
                  }
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state,
  };
};

export default connect(mapStateToProps, { addToDo, toggleToDo, deleteToDo })(
  ItemList
);

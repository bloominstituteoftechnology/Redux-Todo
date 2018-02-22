import React from 'react';
import { connect } from 'react-redux';
import { toggle, remove } from '../actions';

class ToDo extends React.Component {
  render() {
    const todos = this.props.todos.filter(todo => {
      return todo.completed === false;
    });

    const completed = this.props.todos.filter(todo => todo.completed === true);
    return (
      <div className="todo__list">
        <ul>
          {todos.map(x => {
            return (
              <li key={x.id}>
                <button onClick={() => this.props.remove(x.id)}>X</button>
                <input
                  className="todo__checkbox"
                  onClick={() => this.props.toggle(x.id)}
                  type="checkbox"
                />
                {x.text}
              </li>
            );
          })}
          {completed.map(x => {
            return (
              <li key={x.id}>
                <button onClick={() => this.props.remove(x.id)}>X</button>
                <input
                  className="todo__checkbox"
                  onClick={() => this.props.toggle(x.id)}
                  type="checkbox"
                />
                <del>{x.text}</del>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  };
};

export default connect(mapStateToProps, { toggle, remove })(ToDo);

import React from 'react';
import { connect } from 'react-redux';
import { remove, toggle } from '../actions';

class ToDo extends React.Component{
  render() {
    console.log('props', this.props);
    const todos = this.props.todos.filter((todo) => {return todo.completed === false});

    const completed = this.props.todos.filter((todo)=> todo.completed === true);
    console.log('todo', todos);
    return (
      <div>
        <ul>
          {todos.map(x => {
            return (
              <li key={x.id} >
                {x.text}
                <input onClick={() => this.props.toggle(x.id)} type="checkbox" />
              </li>

            );
          })}
          {completed.map(x => {
            return (
              <li key={x.id} >
                <del>{x.text}</del>
                <input onClick={() => this.props.toggle(x.id)} type="checkbox" />
              </li>
            );
          })}


        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state,
  };
};

export default connect(mapStateToProps, {remove, toggle})(ToDo);
